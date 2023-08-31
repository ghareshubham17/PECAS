frappe.ui.form.on('Quotation', {	
	get_data:function(frm){
      console.log("clicked")
	  	// console.log(frm.doc)
		var id = frm.doc.revision;
		console.log(id); 

		frappe.call({
			method: "pecas.lab_pecas.constants.quotation.get_data_from_id",
			args: {
				docname:id
			},
			callback: function(response) {
				var data = response.message;
				if (data) {
					console.log(data);
					// Clear existing child table rows
					frm.set_value('party_name',data.party_name);
					frm.clear_table("items");
					
					// Populate child table with data
					$.each(data.items, function(index, item_data) {
						console.log(index);
						console.log(item_data);
						console.log( item_data.discount_percentage);
						var row = frm.add_child("items");
						// console.log(row);
						frappe.model.set_value(row.doctype, row.name, "item_code", item_data.item_code);
						frappe.model.set_value(row.doctype, row.name, "qty", item_data.qty);
						// Set other child table fields
					});
					
					// Refresh the child table
					frm.refresh_field("items");
				}
			}
		});
		
	},
	refresh: function (frm) {

		// GAxis Dynamic Logic
		gaxis_dynamic(frm);

        //remove Subscription button from Create
		setTimeout(() => {
			frm.page.remove_inner_button('Subscription', 'Create');
		}, 300);

		if ((frm.is_new())) {
			frm.set_value("naming_series", "SAL-XX-QTN.YYYY.-");
			frm.set_df_property('naming_series', 'read_only', 1);
		}

		if (frm.doc.recived_from == 1) {
			frm.set_df_property('quotation_to', 'read_only', 1);
			frm.set_df_property('party_name', 'read_only', 1);
			frm.set_df_property('select', 'read_only', 1);
			frm.set_df_property('revision', 'hidden', 1);
		}

		if (!(frm.is_new())) {
			frm.set_df_property('revision', 'read_only', 1)
			frm.set_df_property('select', 'read_only', 1);
		}

		frm.set_query('revision', function (doc) {
			return {
				filters: {
					"status": ["In", ["Open"]]
				}
			};
		});
	},
	before_save: function (frm) {
		frm.set_value("recived_from",1)
		frm.set_df_property("sec_tax_breakup", "hidden", 0);
	},

	shipping_rule: function (frm) {
		frm.set_df_property("sec_tax_breakup", "hidden", 1);

	},
});

var gaxis_dynamic = function (frm, bool = true) {
	if (!frappe.user_roles.includes("Administrator")) {
		// Set Read Only property
		frm.set_df_property("additional_info_section", "read_only", bool);
		frm.set_df_property("print_settings", "read_only", bool);
		frm.set_df_property("naming_series", "read_only", bool);
		frm.set_df_property("transaction_date", "read_only", bool);
		frm.set_df_property("scan_barcode", "read_only", bool);
		// frm.set_df_property("ignore_pricing_rule", "read_only", bool);
		frm.set_df_property("coupon_code", "read_only", bool);
		frm.set_df_property("referral_sales_partner", "read_only", bool);

		// Set Hidden property
		frm.set_df_property("print_settings", "hidden", bool);
		frm.set_df_property("additional_info_section", "hidden", bool);
		frm.set_df_property("naming_series", "hidden", bool);
		frm.set_df_property("scan_barcode", "hidden", bool);
		// frm.set_df_property("ignore_pricing_rule", "hidden", bool);
        frm.set_df_property("coupon_code", "hidden", bool);
		frm.set_df_property("referral_sales_partner", "hidden", bool);


		//Hidden Child Quotation item fields
		// is_alternative
		// is_free_item
		// against_blanket_order
		// shopping_cart_section
		// page_break
	}
}
