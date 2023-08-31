import frappe
from frappe.utils import getdate


def autoname(doc, method=None):
		current_fiscal_year = get_current_fiscal_year()
		if doc.select=="Testing":
			doc.naming_series = f"SAL-WO-TS-.{current_fiscal_year}.-"
		else:
			doc.naming_series = f"SAL-WO-CS-.{current_fiscal_year}.-"




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
