from frappe import get_doc
import frappe

def permission_rules_for_doctypes():
    #Company
    add_custom_permission_rule("Company","GAxis Manager",select=1,read=1)
    #override
    override_predefined_permission_rule("Company","Accounts Manager",select=1,read=1)

    #Customer
    add_custom_permission_rule("Customer","GAxis Manager",select=1,read=1,write=1,create=1,delete=1)

    #item
    add_custom_permission_rule("Item","Sales Master Manager",select=1,read=1)
    add_custom_permission_rule("Item","Purchase Master Manager",select=1,read=1)
    add_custom_permission_rule("Item","GAxis Manager",select=1,read=1,write=1,create=1,delete=1)

    #Item Group
    add_custom_permission_rule("Item Group","Sales Master Manager",read=1,write=1,create=1,delete=1)
    add_custom_permission_rule("Item Group","Purchase Master Manager",read=1,write=1,create=1,delete=1)

    #Item Tax Template
    add_custom_permission_rule("Item Tax Template","GAxis Manager",select=1,read=1)
    add_custom_permission_rule("Item Tax Template","Item Manager",select=1,read=1)

    #Payment Terms Template
    add_custom_permission_rule("Payment Terms Template","Purchase Master Manager",select=1,read=1)
    add_custom_permission_rule("Payment Terms Template","Sales User",select=1,read=1,write=1,create=1,delete=1)
    add_custom_permission_rule("Payment Terms Template","GAxis Manager",select=1,read=1)

    #Payment Term
    add_custom_permission_rule("Payment Term","Sales User",read=1,write=1,create=1,delete=1)

    #Terms and Conditions Sales Manager
    override_predefined_permission_rule("Terms and Conditions","Sales User",select=1,read=1,write=1,create=1,delete=1)
    add_custom_permission_rule("Payment Term","Sales Manager",read=1,write=1,create=1,delete=1)
    
    #Tax Category
    add_custom_permission_rule("Tax Category","Item Manager",select=1,read=1)
    add_custom_permission_rule("Tax Category","Sales User",select=1,read=1)
    add_custom_permission_rule("Tax Category","Sales Manager",select=1,read=1)
    add_custom_permission_rule("Tax Category","GAxis Manager",select=1,read=1)

    #Supplier
    add_custom_permission_rule("Supplier","GAxis Manager",read=1,write=1,create=1,delete=1)

    #Market Segment
    add_custom_permission_rule("Market Segment","Sales Master Manager",select=1,read=1)
    add_custom_permission_rule("Market Segment","Sales User",select=1,read=1)

    #Customer Group
    add_custom_permission_rule("Customer Group","GAxis Manager",select=1,read=1,write=1,create=1,delete=1)
    
    #Item Price
    add_custom_permission_rule("Item Price","Item Manager",select=1,read=1,write=1,create=1,delete=1)
    add_custom_permission_rule("Item Price","GAxis Manager",select=1,read=1,write=1,create=1,delete=1)
   
    #Price List
    add_custom_permission_rule("Price List","GAxis Manager",select=1,read=1,write=1,create=1,delete=1)
    #override
    override_predefined_permission_rule("Price List","Purchase Master Manager",select=1,read=1)
    override_predefined_permission_rule("Price List","Sales Master Manager",select=1,read=1,create=1)


    #Quotation
    add_custom_permission_rule("Quotation","GAxis Manager",read=1,write=1,create=1,delete=1)
    add_custom_permission_rule("Quotation","Sales Master Manager",read=1,write=1,create=1,delete=1)

    #Sales Order
    add_custom_permission_rule("Sales Order","GAxis Manager",read=1,write=1,create=1,delete=1)
    add_custom_permission_rule("Sales Order","Sales Master Manager",read=1,write=1,create=1,delete=1)
    
    #Currency
    add_custom_permission_rule("Currency","GAxis Manager",select=1,read=1)
    add_custom_permission_rule("Currency","Purchase Master Manager",select=1,read=1)
    add_custom_permission_rule("Currency","Sales Master Manager",select=1,read=1)

    #Address
    add_custom_permission_rule("Address","GAxis Manager",select=1,read=1,write=1,create=1,delete=1)
    add_custom_permission_rule("Address","Sales Master Manager",select=1,read=1,write=1,create=1,delete=1)
    
    #Contact
    add_custom_permission_rule("Contact","GAxis Manager",select=1,read=1,write=1,create=1,delete=1)

    #Bank Account
    add_custom_permission_rule("Bank Account","GAxis Manager",select=1,read=1,write=1,create=1,delete=1)
    add_custom_permission_rule("Bank Account","Sales Master Manager",select=1,read=1)
    add_custom_permission_rule("Bank Account","Purchase Master Manager",select=1,read=1)

    #Stock Entry
    add_custom_permission_rule("Stock Entry","Item Manager",read=1,write=1,create=1,delete=1,submit=1)

    #Lead Source
    override_predefined_permission_rule("Lead Source","Sales User",select=1,read=1)
    override_predefined_permission_rule("Lead Source","Sales Manager",select=1,read=1)

    #Pricing Rule
    add_custom_permission_rule("Pricing Rule","Sales User",read=1,write=1,create=1,delete=1)

    #UOM
    add_custom_permission_rule("UOM","Sales User",read=1)
    add_custom_permission_rule("UOM","Sales Manager",read=1)





def add_custom_permission_rule(DocType, role, select=0, read=0, write=0, create=0, delete=0,submit=0):
    doc = frappe.get_doc("DocType", DocType)

    # Check if the role doesn't have permissions already before appending
    if not any(permission.get("role") == role for permission in doc.permissions):
        doc.append("permissions", {
            "role": role,
            "select": select,
            "read": read,
            "write": write,
            "create": create,
            "delete": delete,
            "submit":submit
        })

    doc.save()



def override_predefined_permission_rule(DocType, role, select=0, read=0, write=0, create=0, delete=0,submit=0):
    doc = frappe.get_doc("DocType",DocType)
    for permission in doc.permissions:
        if permission.role == role:
            permission.read = read
            permission.select=select
            permission.write = write
            permission.create=create
            permission.delete= delete
            permission.submit=submit        
    doc.save()
