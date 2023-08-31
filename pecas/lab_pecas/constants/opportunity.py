import frappe
from frappe.utils import getdate
from erpnext.setup.utils import get_exchange_rate
from frappe.model.mapper import get_mapped_doc

def autoname(doc, method=None):
		current_fiscal_year = get_current_fiscal_year()
		if doc.select=="Testing":
			doc.naming_series = f"CRM-TS-OPP-.{current_fiscal_year}.-"
		else:
			doc.naming_series = f"CRM-CS-OPP-.{current_fiscal_year}.-"


def get_current_fiscal_year():
		current_date = getdate()
		fiscal_years = frappe.get_all("Fiscal Year", fields=["name", "year_start_date", "year_end_date"])
		
		for fiscal_year in fiscal_years:
			start_date = getdate(fiscal_year.year_start_date)
			end_date = getdate(fiscal_year.year_end_date)
		
		if start_date <= current_date <= end_date:
			myvar=fiscal_year.name
			fiscalyears=myvar[2:4]+""+myvar[7:9]
			return fiscalyears
		
		return None  # No matching fiscal year found for the current date	

def set_checkbox_value():
    doctype_obj = frappe.get_doc("DocType", "Opportunity")
    doctype_obj.allow_rename = 0
    doctype_obj.save()



@frappe.whitelist()
def make_quotation(source_name, target_doc=None):
	def set_missing_values(source, target):
		from erpnext.controllers.accounts_controller import get_default_taxes_and_charges
		quotation = frappe.get_doc(target)
  
		company_currency = frappe.get_cached_value("Company", quotation.company, "default_currency")

		if company_currency == quotation.currency:
			exchange_rate = 1
		else:
			exchange_rate = get_exchange_rate(
				quotation.currency, company_currency, quotation.transaction_date, args="for_selling"
			)

		quotation.conversion_rate = exchange_rate

		# get default taxes
		taxes = get_default_taxes_and_charges(
			"Sales Taxes and Charges Template", company=quotation.company
		)
		if taxes.get("taxes"):
			quotation.update(taxes)

		quotation.run_method("set_missing_values")
		quotation.run_method("calculate_taxes_and_totals")
		if not source.get("items", []):
			quotation.opportunity = source.name

	doclist = get_mapped_doc(
		"Opportunity",
		source_name,
		{
			"Opportunity": {
				"doctype": "Quotation",
				"field_map": {"opportunity_from": "quotation_to", "name": "enq_no","select":"select","recived_from":"recived_from"},
			},
			"Opportunity Item": {
				"doctype": "Quotation Item",
				"field_map": {
					"parent": "prevdoc_docname",
					"parenttype": "prevdoc_doctype",
					"uom": "stock_uom",
				},
				"add_if_empty": True,
			},
		},
		target_doc,
		set_missing_values,
	)

	return doclist

@frappe.whitelist()
def get_item_details(item_code):
	item = frappe.db.sql(
		"""select item_name,standard_rate,stock_uom, image, description, item_group, brand
		from `tabItem` where name = %s""",
		item_code,
		as_dict=1,
	)
	return {
		"item_name": item and item[0]["item_name"] or "",
		"standard_rate": item and item[0]["standard_rate"] or "",
		"uom": item and item[0]["stock_uom"] or "",
		"description": item and item[0]["description"] or "",
		"image": item and item[0]["image"] or "",
		"item_group": item and item[0]["item_group"] or "",
		"brand": item and item[0]["brand"] or "",
	}