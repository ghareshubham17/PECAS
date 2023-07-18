# Copyright (c) 2023, Ashida Electronics Pvt Ltd and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document
from frappe.model.naming import getseries
from datetime import date


def autoname(doc, method=None):
	print("quoatation")
	if doc.revision:
		if("/" in doc.revision):
			filterValue = doc.revision.split('/')[0]				
			doc.name = filterValue+'/R-'+getseries(filterValue, 5)
		else:
				filterValue = doc.revision.split('/')[0]
				doc.name = filterValue+'/R-'+getseries(filterValue, 5)
	else:
		doc.name = """SAL-QTN-{}-""".format(date.today().year)+getseries(doc.naming_series, 5)

	