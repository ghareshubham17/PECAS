import frappe
from frappe import get_doc

def after_install():
    print("start")
    frappe.delete_doc("Workspace", "crm",force=True)
    frappe.delete_doc("Workspace", "hr", force=True)
    frappe.delete_doc("Workspace", "Manufacturing", force=True)
    frappe.delete_doc("Workspace", "quality", force=True)
    frappe.delete_doc("Workspace", "Projects", force=True)
    frappe.delete_doc("Workspace", "Loans", force=True)
    frappe.delete_doc("Workspace", "support", force=True)
    frappe.delete_doc("Workspace", "Payroll", force=True)
    print("end")
    