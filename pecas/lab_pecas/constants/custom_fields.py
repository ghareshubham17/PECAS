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

Opportunity_fields=[
    {
        "fieldname": "sec_break_section",
        "label": "",
        "fieldtype": "Section Break",
        "insert_after": "select",
        "translatable": 0,
    },
    {
        "fieldname": "select",
        "label": "Selection",
        "fieldtype": "Select",
        "insert_after": "",
        "options":"Testing\nCalibration",
        "translatable": 0,
    },
    {  
        "fieldname": "recived_from",
        "label": "recived from",
        "fieldtype": "Int",
        "insert_after": "language",
        "hidden": 1,
        "translatable": 0,
    }
]


Quoatation_fields=[
    {
        "fieldname": "sec_break_section",
        "label": "",
        "fieldtype": "Section Break",
        "insert_after": "select",
        "translatable": 0,
    },
    {
        "fieldname": "select",
        "label": "Selection",
        "fieldtype": "Select",
        "insert_after": "",
        "options":"Testing\nCalibration",
        "translatable": 0,
    },
    {
        "fieldname": "revision",
        "fieldtype": "Link",
        "label": "Revision",
        "insert_after": "valid_till",
        "options": "Quotation"
    },
    {  
        "fieldname": "recived_from",
        "label": "recived from",
        "fieldtype": "Int",
        "insert_after": "language",
        "hidden": 1,
        "translatable": 0,
    }
]

Sales_Order_fields=[
    {
        "fieldname": "sec_break_section",
        "label": "",
        "fieldtype": "Section Break",
        "insert_after": "select",
        "translatable": 0,
    },
    {
        "fieldname": "select",
        "label": "Selection",
        "fieldtype": "Select",
        "insert_after": "",
        "options":"Testing\nCalibration",
        "translatable": 0,
    },
    {  
        "fieldname": "recived_from",
        "label": "recived from",
        "fieldtype": "Int",
        "insert_after": "language",
        "hidden": 1,
        "translatable": 0,
    },
    {  
        "fieldname": "advance__paid_in_percent",
        "label": "Advance Paid In Percent",
        "fieldtype": "Percent",
        "insert_after": "payment_terms_section",
        "translatable": 0,
    }
]

Sales_Order_Item=[
    {  
        "fieldname": "product_section",
        "label": "Product",
        "fieldtype": "Section Break",
        "insert_after": "item_name",
        "translatable": 0,
    },
    {  
        "fieldname": "product_name",
        "label": "Product Name",
        "fieldtype": "Data",
        "insert_after": "product_section",
        "translatable": 0,
    },
    {  
        "fieldname": "product_type",
        "label": "Product Type",
        "fieldtype": "Data",
        "insert_after": "product_name",
        "translatable": 0,
    },
    {  
        "fieldname": "product_details",
        "label": "Product Details",
        "fieldtype": "Text Editor",
        "insert_after": "product_type",
        "translatable": 0,
    },
    {  
        "fieldname": "column_break_hs4w7",
        "label": "",
        "fieldtype": "Column Break",
        "insert_after": "product_details",
        "translatable": 0,
    },
    {  
        "fieldname": "productsrno",
        "label": "Product Sr.No",
        "fieldtype": "Data",
        "insert_after": "column_break_hs4w7",
        "translatable": 0,
    },
    {  
        "fieldname": "product_functionality_details",
        "label": "Product Functionality Details",
        "fieldtype": "Text Editor",
        "insert_after": "productsrno",
        "translatable": 0,
    },
    {  
        "fieldname": "section_break_lpmv9",
        "label": "",
        "fieldtype": "Section Break",
        "insert_after": "product_functionality_details",
        "translatable": 0,
    },
    {  
        "fieldname": "comments",
        "label": "Comments",
        "fieldtype": "Text Editor",
        "insert_after": "section_break_lpmv9",
        "translatable": 0,
    },
    
]

CUSTOM_FIELDS = {
    ("Quotation"):Quoatation_fields,
    ("Opportunity"):Opportunity_fields,
    ("Sales Order"): Sales_Order_fields,
    ("Sales Order Item"): Sales_Order_Item
}
