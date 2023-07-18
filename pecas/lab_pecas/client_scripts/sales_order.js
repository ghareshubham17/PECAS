frappe.ui.form.on('Sales Order', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
	  gaxis_dynamic(frm);
	},
	shipping_rule:function(frm){
		console.log("ss")
        frm.set_df_property("sec_tax_breakup","hidden",1)
	},
	before_save:function(frm){
		console.log("before")
	   frm.set_df_property("sec_tax_breakup","hidden",0)
	},
});

var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {
		// Remove the field if form is new and show on edit
		if(frm.is_new()) {
			frm.set_df_property('gst_details_section', 'hidden', bool);
		}	

		// Set Read Only property
		frm.set_df_property("cost_center", "read_only", bool);
		frm.set_df_property("disable_rounded_total", "read_only", bool);
	    frm.set_df_property("section_break_78", "read_only", bool);
		frm.set_df_property("printing_details", "read_only", bool);
		frm.set_df_property("additional_info_section", "read_only", bool);
		frm.set_df_property("set_warehouse", "read_only", bool);
		frm.set_df_property("scan_barcode", "read_only", bool);

		// Set Hidden property
		frm.set_df_property("cost_center", "hidden", bool);
		frm.set_df_property("disable_rounded_total", "hidden", bool);
		frm.set_df_property("section_break_78", "hidden", bool);
		frm.set_df_property("printing_details", "hidden", bool);
		frm.set_df_property("additional_info_section", "hidden", bool);
		frm.set_df_property("set_warehouse", "hidden", bool);
		frm.set_df_property("scan_barcode", "hidden", bool);

	  // Child Table Hidden Fields(Sales Order Item)
	  //  * page_break
	  //  * shopping_cart_section

	}
}