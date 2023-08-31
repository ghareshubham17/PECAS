frappe.ui.form.on('Sales Order', {
	refresh: function (frm) {
		// GAxis Dynamic Logic
		gaxis_dynamic(frm);

		if ((frm.is_new())) {
			frm.set_value("naming_series", "SAL-WO-XX.YYYY.-");
			frm.set_df_property('naming_series', 'read_only', 1);
		}

		console.log(frm.doc.recived_from);

		if (frm.doc.recived_from == 1) {
			frm.set_df_property('select', 'read_only', 1);
			frm.set_df_property('customer', 'read_only', 1);
			frm.set_df_property('order_type', 'read_only', 1);
		}

		setTimeout(() => {
			console.log("timeout");
			frm.page.remove_inner_button('Pick List', 'Create');
			frm.page.remove_inner_button('Work Order', 'Create');
			frm.page.remove_inner_button('Sales Invoice', 'Create');
			frm.page.remove_inner_button('Material Request', 'Create');
			frm.page.remove_inner_button('Purchase Order', 'Create');
			frm.page.remove_inner_button('Project', 'Create');
			frm.page.remove_inner_button('Payment Request', 'Create');
			frm.page.remove_inner_button('Delivery Note', 'Create');
			frm.page.remove_inner_button('Request for Raw Materials', 'Create');
			frm.page.remove_inner_button('Subscription', 'Create');
		}, 300);


	},
	shipping_rule: function (frm) {
		frm.set_df_property("sec_tax_breakup", "hidden", 1)
	},
	before_save: function (frm) {
		frm.set_df_property("sec_tax_breakup", "hidden", 0)
	},
});

var gaxis_dynamic = function (frm, bool = true) {
	if (!frappe.user_roles.includes("Administrator")) {
		// Remove the field if form is new and show on edit
		if (frm.is_new()) {
			frm.set_df_property('gst_details_section', 'hidden', bool);
		}

		// Set Read Only property
		frm.set_df_property("cost_center", "read_only", bool);
		frm.set_df_property("disable_rounded_total", "read_only", bool);
		frm.set_df_property("section_break_78", "read_only", bool);
		// frm.set_df_property("printing_details", "read_only", bool);
		frm.set_df_property("additional_info_section", "read_only", bool);
		frm.set_df_property("set_warehouse", "read_only", bool);
		frm.set_df_property("scan_barcode", "read_only", bool);
		frm.set_df_property("cost_center", "read_only", bool);
		frm.set_df_property("project", "read_only", bool);
		frm.set_df_property("coupon_code", "read_only", bool);
		frm.set_df_property("sales_partner", "read_only", bool);
		frm.set_df_property("amount_eligible_for_commission", "read_only", bool);
		frm.set_df_property("commission_rate", "read_only", bool);
		frm.set_df_property("ecommerce_gstin", "read_only", bool);
		frm.set_df_property("total_commission", "read_only", bool);


		// Set Hidden property
		frm.set_df_property("cost_center", "hidden", bool);
		frm.set_df_property("disable_rounded_total", "hidden", bool);
		frm.set_df_property("section_break_78", "hidden", bool);
		// frm.set_df_property("printing_details", "hidden", bool);
		frm.set_df_property("additional_info_section", "hidden", bool);
		frm.set_df_property("set_warehouse", "hidden", bool);
		frm.set_df_property("scan_barcode", "hidden", bool);
		frm.set_df_property("cost_center", "hidden", bool);
		frm.set_df_property("project", "hidden", bool);
		frm.set_df_property("coupon_code", "hidden", bool);
		frm.set_df_property("sales_partner", "hidden", bool);
		frm.set_df_property("amount_eligible_for_commission", "hidden", bool);
		frm.set_df_property("commission_rate", "hidden", bool);
		frm.set_df_property("ecommerce_gstin", "hidden", bool);
		frm.set_df_property("total_commission", "hidden", bool);



		// Child Table Hidden Fields(Sales Order Item)
		//  * page_break
		//  * shopping_cart_section

	}
}