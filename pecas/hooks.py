from . import __version__ as app_version

app_name = "pecas"
app_title = "Pecas"
app_publisher = "shubham"
app_description = "child company"
app_email = "ghareshubham88@gmail.com"
app_license = "aa"

# Includes in <head>
# ------------------
app_include_css = "/assets/pecas/css/pecas.css"

doctype_js = {
    "Customer": "lab_pecas/client_scripts/customer.js",
    "Company":"lab_pecas/client_scripts/company.js",
    "Address":"lab_pecas/client_scripts/address.js",
    "Supplier":"lab_pecas/client_scripts/supplier.js",
    "Supplier Quotation":"lab_pecas/client_scripts/supplier_quotation.js",
    "User":"lab_pecas/client_scripts/user.js",
    "Quotation":"lab_pecas/client_scripts/quotation.js",
    "Sales Order":"lab_pecas/client_scripts/sales_order.js",
    "Batch":"lab_pecas/client_scripts/batch.js",
    "Item":"lab_pecas/client_scripts/item.js",
    "Stock Entry":"lab_pecas/client_scripts/stock_entry.js",
    "Stock Reconciliation":"lab_pecas/client_scripts/stock_reconciliation.js",
    "Sales Invoice":"lab_pecas/client_scripts/sales_invoice.js",
    "Warehouse":"lab_pecas/client_scripts/warehouse.js",
    "Item Group":"lab_pecas/client_scripts/item_group.js",
    "Contact":"lab_pecas/client_scripts/contact.js"
}

doc_events = {
    "Quotation": {
        "autoname": [
            "pecas.lab_pecas.constants.quotation.autoname",
        ],
    },
    "Company": {
        "on_update": [
            "pecas.lab_pecas.constants.company.on_update_abbr",
        ],
    },
}

after_install = "pecas.install.after_install"
after_migrate="pecas.install.after_install"

# include js, css files in header of desk.html
# app_include_css = "/assets/pecas/css/pecas.css"

# app_include_js = "/assets/pecas/js/pecas.js"

# include js, css files in header of web template
# web_include_css = "/assets/pecas/css/pecas.css"
# web_include_js = "/assets/pecas/js/pecas.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "pecas/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "pecas.utils.jinja_methods",
#	"filters": "pecas.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "pecas.install.before_install"
# after_install = "pecas.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "pecas.uninstall.before_uninstall"
# after_uninstall = "pecas.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "pecas.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"pecas.tasks.all"
#	],
#	"daily": [
#		"pecas.tasks.daily"
#	],
#	"hourly": [
#		"pecas.tasks.hourly"
#	],
#	"weekly": [
#		"pecas.tasks.weekly"
#	],
#	"monthly": [
#		"pecas.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "pecas.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "pecas.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "pecas.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["pecas.utils.before_request"]
# after_request = ["pecas.utils.after_request"]

# Job Events
# ----------
# before_job = ["pecas.utils.before_job"]
# after_job = ["pecas.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"pecas.auth.validate"
# ]

fixtures=[
    "Workspace"
]