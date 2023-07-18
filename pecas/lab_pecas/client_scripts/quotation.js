frappe.ui.form.on('Quotation', {
	refresh: function(frm) {
		if(!(frm.is_new())) {
			frm.set_df_property('revision', 'read_only', 1)
		}
		frm.set_query('revision', function(doc) {
			return {
				filters: {
					"status": ["In",["Open"]]
				}
			};
		});
	    // GAxis Dynamic Logic
		gaxis_dynamic(frm);
	},
	before_save: function(frm){
		frm.set_df_property("sec_tax_breakup", "hidden", 0);
	},

	shipping_rule: function (frm) {
		frm.set_df_property("sec_tax_breakup", "hidden", 1);
		
	}
});

var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {	
		// Set Read Only property
		frm.set_df_property("additional_info_section", "read_only", bool);
		frm.set_df_property("print_settings", "read_only", bool);

		// Set Hidden property
		frm.set_df_property("print_settings", "hidden", bool);
		frm.set_df_property("additional_info_section", "hidden", bool);

		//Hidden Child Quotation item fields
		// is_alternative
		// is_free_item
		// against_blanket_order
		// shopping_cart_section
		// page_break
	}
}
