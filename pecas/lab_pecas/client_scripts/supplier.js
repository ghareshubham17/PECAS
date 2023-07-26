frappe.ui.form.on('Supplier', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
		gaxis_dynamic(frm);
	},
});


var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {
		// Remove the field if form is new and show on edit
		if(frm.is_new()) {
			frm.set_df_property('disabled', 'hidden', bool);
			frm.set_df_property('is_frozen', 'hidden', bool);
			frm.set_df_property('primary_address_and_contact_detail_section', 'hidden', bool);
		}

		// Set Read Only property
		frm.set_df_property("tax_id", "read_only", bool);
		frm.set_df_property("tax_category", "read_only", bool);
		frm.set_df_property("tax_withholding_category", "read_only", bool);
		frm.set_df_property("default_receivable_accounts", "read_only", bool);
		frm.set_df_property("allow_purchase_invoice_creation_without_purchase_order", "read_only", bool);
		frm.set_df_property("allow_purchase_invoice_creation_without_purchase_receipt", "read_only", bool);
		frm.set_df_property("language", "read_only", bool);
		frm.set_df_property("is_internal_supplier", "read_only", bool);
		frm.set_df_property("accounts", "read_only", bool);
		frm.set_df_property("block_supplier_section", "read_only", bool);

		
		// Set Hidden property
		frm.set_df_property("tax_id", "hidden", bool);
		frm.set_df_property("tax_category", "hidden", bool);
		frm.set_df_property("tax_withholding_category", "hidden", bool);
		frm.set_df_property("default_receivable_accounts", "hidden", bool);
		frm.set_df_property("language", "hidden", bool);
		frm.set_df_property("is_internal_supplier", "hidden", bool);
		frm.set_df_property("accounts", "hidden", bool);
		frm.set_df_property("block_supplier_section", "hidden", bool);
	}
}