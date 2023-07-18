frappe.ui.form.on('Stock Reconciliation', {
	refresh: function(frm) {
	    // GAxis Dynamic Logic
		gaxis_dynamic(frm);
	},
})

var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {
		// Set Read Only property
		frm.set_df_property("set_posting_time", "read_only", bool);
		frm.set_df_property("scan_barcode", "read_only", bool);
		frm.set_df_property("scan_mode", "read_only", bool);
		frm.set_df_property("expense_account", "read_only", bool);
		frm.set_df_property("cost_center", "read_only", bool);

		// Set Hidden property
		frm.set_df_property("scan_barcode", "hidden", bool);
		frm.set_df_property("scan_mode", "hidden", bool);
		frm.set_df_property("cost_center", "hidden", bool);
	}
}
