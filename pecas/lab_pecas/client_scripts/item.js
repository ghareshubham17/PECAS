frappe.ui.form.on('Item', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
	  gaxis_dynamic(frm);
	},

	after_save: function (frm) {		
		frappe.ui.toolbar.clear_cache()			
	},
});

var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {
		// Remove the field if form is new and show on edit
		if(frm.is_new()) {
			frm.set_df_property('disabled', 'hidden', true);		
		}
        //set value
		frm.set_value("is_stock_item",0);
		frm.set_value("include_item_in_manufacturing",0);

		// Set Read Only property		
		frm.set_df_property("is_fixed_asset", "read_only", bool);
		frm.set_df_property("reorder_section", "read_only", bool);
		frm.set_df_property("deferred_revenue", "read_only", bool);
		frm.set_df_property("purchase_uom", "read_only", bool);
		frm.set_df_property("lead_time_days", "read_only", bool);
		frm.set_df_property("min_order_qty", "read_only", bool);
		frm.set_df_property("is_customer_provided_item", "read_only", bool);
		frm.set_df_property("safety_stock", "read_only", bool);
		frm.set_df_property("is_purchase_item", "read_only", bool);
		frm.set_df_property("supplier_details", "read_only", bool);
		frm.set_df_property("deferred_expense_section", "read_only", bool);
		frm.set_df_property("foreign_trade_details", "read_only", bool);
		frm.set_df_property("inspection_required_before_purchase", "read_only", bool);
		frm.set_df_property("quality_inspection_template", "read_only", bool);
		frm.set_df_property("inspection_required_before_delivery", "read_only", bool);
		frm.set_df_property("last_purchase_rate", "read_only", bool);
		frm.set_df_property("item_defaults", "read_only", bool);
		frm.set_df_property("brand", "read_only", bool);
		frm.set_df_property("customer_details", "read_only", bool);
		frm.set_df_property("grant_commission", "read_only", bool);
		frm.set_df_property("sales_uom", "read_only", bool);
		// frm.set_df_property("max_discount", "read_only", bool);
		frm.set_df_property("is_sales_item", "read_only", bool);
		frm.set_df_property("is_stock_item", "read_only", bool);
		frm.set_df_property("include_item_in_manufacturing", "read_only", bool);
		frm.set_df_property("over_delivery_receipt_allowance", "read_only", bool);
		frm.set_df_property("over_billing_allowance", "read_only", bool);

		// Set Hidden property
		frm.set_df_property("is_fixed_asset", "hidden", bool);
	    frm.set_df_property("reorder_section", "hidden", bool);
		frm.set_df_property("deferred_revenue", "hidden", bool);
		frm.set_df_property("purchase_uom", "hidden", bool);
	    frm.set_df_property("lead_time_days", "hidden", bool);
		frm.set_df_property("min_order_qty", "hidden", bool);
		frm.set_df_property("is_customer_provided_item", "hidden", bool);
	    frm.set_df_property("safety_stock", "hidden", bool);
		frm.set_df_property("is_purchase_item", "hidden", bool);
		frm.set_df_property("supplier_details", "hidden", bool);
	    frm.set_df_property("deferred_expense_section", "hidden", bool);
		frm.set_df_property("foreign_trade_details", "hidden", bool);
		frm.set_df_property("inspection_required_before_purchase", "hidden", bool);
	    frm.set_df_property("quality_inspection_template", "hidden", bool);
		frm.set_df_property("inspection_required_before_delivery", "hidden", bool);
		frm.set_df_property("last_purchase_rate", "hidden", bool);
		frm.set_df_property("item_defaults", "hidden", bool);
		frm.set_df_property("brand", "hidden", bool);
		frm.set_df_property("customer_details", "hidden", bool);
		frm.set_df_property("grant_commission", "hidden", bool);
		frm.set_df_property("sales_uom", "hidden", bool);
		// frm.set_df_property("max_discount", "hidden", bool);
		frm.set_df_property("is_sales_item", "hidden", bool);
		frm.set_df_property("is_stock_item", "hidden", bool);
		frm.set_df_property("include_item_in_manufacturing", "hidden", true);
		frm.set_df_property("over_delivery_receipt_allowance", "hidden", true);
		frm.set_df_property("over_billing_allowance", "hidden", true);
	}
}