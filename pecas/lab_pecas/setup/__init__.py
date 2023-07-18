import frappe
from pecas.lab_pecas.constants.custom_fields import (
    CUSTOM_FIELDS,
)
from frappe.custom.doctype.custom_field.custom_field import (
    create_custom_fields as _create_custom_fields,
)

def after_install():
    create_custom_fields()
    removing_fields()


def create_custom_fields():
    # Validation ignored for faster creation
    # Will not fail if a core field with same name already exists (!)
    # Will update a custom field if it already exists
    _create_custom_fields(get_all_custom_fields(), ignore_validate=True)


def get_all_custom_fields():
    result = {}

    for custom_fields in (
        CUSTOM_FIELDS,
    ):
        for doctypes, fields in custom_fields.items():
            if isinstance(fields, dict):
                fields = [fields]

            result.setdefault(doctypes, []).extend(fields)

    return result

def removing_fields():
    # Sales Order Item
    hide_child_table_field('Sales Order Item','page_break')
    hide_child_table_field('Sales Order Item','shopping_cart_section')

    # Sales Invoice Item
    hide_child_table_field('Sales Invoice Item','page_break')
    hide_child_table_field('Sales Invoice Item','barcode')
    hide_child_table_field('Sales Invoice Item','accounting')
    hide_child_table_field('Sales Invoice Item','deferred_revenue') 
    hide_child_table_field('Sales Invoice Item','accounting_dimensions_section')

    #Quotation Item
    hide_child_table_field('Quotation Item','is_alternative')
    hide_child_table_field('Quotation Item','is_free_item')
    hide_child_table_field('Quotation Item','against_blanket_order') 
    hide_child_table_field('Quotation Item','shopping_cart_section')
    hide_child_table_field('Quotation Item','page_break')

    #Supplier Quotation Item
    hide_child_table_field('Supplier Quotation Item','page_break')

@frappe.whitelist()
def hide_child_table_field(doctype_name, fieldname):
    doctype = frappe.get_doc("DocType", doctype_name)
    for field in doctype.fields:
        if field.fieldname == fieldname:
            field.hidden = 1
            break
    doctype.save()
    