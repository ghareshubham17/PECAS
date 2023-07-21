import frappe
from frappe import get_doc

from pecas.lab_pecas.setup import after_install as settinup_custom_fields
import frappe
import click

def after_install():
    try:
        print("Setting Up Custom Fields")
        settinup_custom_fields()
        delete_workspace()
        
    except Exception as e:
        click.secho(
            (
                "Installation for PECAS failed due to an error."
                " Please try re-installing the app or"
                f" report the issue on  if not resolved."
            ),
            fg="bright_red",
        )
        raise e

    click.secho("Thank you for installing PECAS!", fg="green")


    
def delete_workspace():
    Workspaces=["Manufacturing","crm","Quality","Payroll","Accounting","Projects","Loans","support","Assets","GST India","Buying","Stock","Selling"]
    print("ex")
    for ws in Workspaces:
        frappe.delete_doc_if_exists("Workspace", ws)
    
    for ws in Workspaces:
        frappe.db.set_value("Workspace", ws, "public", 0)    