frappe.ui.form.on('Supplier Quotation', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
		gaxis_dynamic(frm);
	},
	before_save: function(frm){
		frm.set_df_property("tax_breakup", "hidden", false);
	},

	shipping_rule: function (frm) {
		frm.set_df_property("tax_breakup", "hidden", true);
		
	}
});


var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {	
		// Set Read Only property
		frm.set_df_property("more_info", "read_only", bool);
		frm.set_df_property("printing_settings", "read_only", bool);
		frm.set_df_property("disable_rounded_total", "read_only", bool);

		// Set Hidden property
		frm.set_df_property("more_info", "hidden", bool);
		frm.set_df_property("printing_settings", "hidden", bool);
		frm.set_df_property("disable_rounded_total", "hidden", bool);
	}

	//Child Table Hiden Fields(Supplier Quotation Item)
	//  * page_break
}
