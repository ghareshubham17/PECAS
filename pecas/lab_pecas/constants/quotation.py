# Copyright (c) 2023, Ashida Electronics Pvt Ltd and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.utils import getdate
from frappe.model.document import Document
from frappe.model.naming import getseries
from datetime import date
from frappe.utils import flt, getdate, nowdate

# def autoname(doc, method=None):		
# 		# doc.name = """SAL-QTN-{}-""".format(date.today().year)+getseries(doc.naming_series, 5)
# 		current_fiscal_year = get_current_fiscal_year()

# 		if doc.select=="Testing":
# 			doc.naming_series = f"SAL-TS-QTN-.{current_fiscal_year}.-"
# 		else:
# 			doc.naming_series = f"SAL-CS-QTN-.{current_fiscal_year}.-"

def autoname(doc, method=None):		
	if doc.revision:
		if("/" in doc.revision):
			filterValue = doc.revision.split('/')[0]				
			doc.name = filterValue+'/R-'+getseries(filterValue, 5)
		else:
				filterValue = doc.revision.split('/')[0]
				doc.name = filterValue+'/R-'+getseries(filterValue, 5)
	else:
		# doc.name = """SAL-QTN-{}-""".format(date.today().year)+getseries(doc.naming_series, 5)
		current_fiscal_year = get_current_fiscal_year()

		if doc.select=="Testing":
			doc.naming_series = f"SAL-TS-QTN-.{current_fiscal_year}.-"
		else:
			doc.naming_series = f"SAL-CS-QTN-.{current_fiscal_year}.-"

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



@frappe.whitelist()
def add_options_in_select_field():
	doc = frappe.get_doc("DocType", "Quotation")
	doc.fields[10].options +="\n"+"Services"
	doc.save()
	return doc


@frappe.whitelist()
def get_data_from_id(docname):
    # Perform some processing
    # Return the data you want to retrieve
	doc = frappe.get_doc("Quotation",docname)
	all_data = doc.as_dict()
	return all_data

