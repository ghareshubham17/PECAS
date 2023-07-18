frappe.ui.form.on('Stock Entry', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
		gaxis_dynamic(frm);
	},
});
var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {
		// Set Read Only property
		frm.set_df_property("set_posting_time", "read_only", bool);
		frm.set_df_property("inspection_required", "read_only", bool);
		frm.set_df_property("work_order", "read_only", bool);
		frm.set_df_property("from_bom", "read_only", bool);
		frm.set_df_property("get_stock_and_rate", "read_only", bool);
		frm.set_df_property("scan_barcode", "read_only", bool);

		// Set Hidden property
		frm.set_df_property("inspection_required", "hidden", bool);
		frm.set_df_property("work_order", "hidden", bool);
		frm.set_df_property("from_bom", "hidden", bool);
		frm.set_df_property("get_stock_and_rate", "hidden", bool);
		frm.set_df_property("scan_barcode", "hidden", bool);
	}
}