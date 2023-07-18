import frappe
from frappe import _


Companys_fields=[
    {
        "fieldname": "cin",
        "label": "CIN",
        "fieldtype": "Data",
        "insert_after": "pan",
        "translatable": 0,
    }
]

Quoatation_fields=[
    {
        "fieldname": "revision",
        "fieldtype": "Link",
        "label": "Revision",
        "insert_after": "valid_till",
        "options": "Quotation"
    }
]

CUSTOM_FIELDS = {
    ("Company"): Companys_fields,
    ("Quotation"):Quoatation_fields,

}
