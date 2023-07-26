# Copyright (c) 2023, Ashida Electronics Pvt Ltd and contributors
# For license information, please see license.txt

import frappe


def on_update_abbr(doc, method=None):
    doctype="Company"
    filters={"abbr": "PECASPL"}
    fieldname="abbr"
    new_value="PECaS"

    records = frappe.get_all(doctype, filters=filters)
    for record in records:
        current_value = frappe.get_value(doctype, record.name, fieldname)
        if current_value != new_value:
            frappe.db.set_value(doctype, record.name, fieldname, new_value)


	