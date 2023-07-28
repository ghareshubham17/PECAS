frappe.ui.form.on('Customer', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
	  gaxis_dynamic(frm);
	},
});

var gaxis_dynamic = function(frm, bool=true) {

	if(!frappe.user_roles.includes("Administrator")) {
		// Remove the field if form is new and show on edit
		if(frm.is_new()) {
			frm.set_df_property('disabled', 'hidden', true);
			frm.set_df_property('is_frozen', 'hidden', true);
			frm.set_df_property('primary_address_and_contact_detail', 'hidden', true);
		}
      	
		// Set Read Only property
		frm.set_df_property("tax_id", "read_only", bool);
		frm.set_df_property("tax_category", "read_only", bool);
		frm.set_df_property("tax_withholding_category", "read_only", bool);
		frm.set_df_property("default_receivable_accounts", "read_only", bool);
		frm.set_df_property("so_required", "read_only", bool);
		frm.set_df_property("dn_required", "read_only", bool);		
		frm.set_df_property("is_internal_customer", "read_only", bool);
		frm.set_df_property("language", "read_only", bool);
		frm.set_df_property("lead_name", "read_only", bool);
		frm.set_df_property("opportunity_name", "read_only", bool);
		frm.set_df_property("sales_team", "read_only", bool);
		frm.set_df_property("default_sales_partner", "read_only", bool);
		frm.set_df_property("default_commission_rate", "read_only", bool);
		frm.set_df_property("loyalty_points_tab", "read_only", bool);
		frm.set_df_property("default_bank_account", "read_only", bool);


		// Set Hidden property
		frm.set_df_property("tax_id", "hidden", bool);
		frm.set_df_property("tax_category", "hidden", bool);
		frm.set_df_property("tax_withholding_category", "hidden", bool);
		frm.set_df_property("default_receivable_accounts", "hidden", bool);
		frm.set_df_property("is_internal_customer", "hidden", bool);
		frm.set_df_property("language", "hidden", bool);
		frm.set_df_property("lead_name", "hidden", bool);
		frm.set_df_property("opportunity_name", "hidden", bool);
		frm.set_df_property("sales_team", "hidden", bool);
		frm.set_df_property("default_sales_partner", "hidden", bool);
		frm.set_df_property("default_commission_rate", "hidden", bool);
		frm.set_df_property("loyalty_points_tab", "hidden", bool);
		frm.set_df_property("default_bank_account", "hidden", bool);
	}
}