frappe.ui.form.on('Opportunity', {
	refresh: function (frm) {
       // GAxis Dynamic Logic
		gaxis_dynamic(frm);

		frm.page.sidebar.remove();

		// Remove Custom Buttons  
		frm.remove_custom_button('Supplier Quotation', 'Create');
		frm.remove_custom_button('Request For Quotation', 'Create');
		frm.remove_custom_button('Quotation', 'Create'); 
       		
		//Added Custom Button
		var doc = frm.doc;
		if(!frm.is_new() && doc.status!=="Lost") {
			
			frm.add_custom_button(__('Quotation.'),
				function() {
					frm.trigger("create_quotation")
				}, __('Create'));
		}
		
		if(!frm.is_new()){
			console.log("ss")
			frm.set_df_property("select", "read_only", true);
		}
	},

	create_quotation(frm) {
		frappe.model.open_mapped_doc({
			method: "pecas.lab_pecas.constants.opportunity.make_quotation",
			frm: cur_frm
		})
	},
	
	before_save:function(frm){
		frm.set_value("recived_from",1)
		console.log(frm.doc.recived_from);
		console.log("beforesubmit")		
	}

});

cur_frm.cscript.item_code = function(doc, cdt, cdn) {
	var d = locals[cdt][cdn];
	if (d.item_code) {
		return frappe.call({
			method: "pecas.lab_pecas.constants.opportunity.get_item_details",
			args: {"item_code":d.item_code},
			callback: function(r, rt) {
				if(r.message) {
					console.log(r);
					$.each(r.message, function(k, v) {
						frappe.model.set_value(cdt, cdn, k, v);
						frappe.model.set_value(cdt, cdn, 'rate', r.message.standard_rate);
					});
					refresh_field('image_view', d.name, 'items');
				}
			}
		})
	}
}

var gaxis_dynamic = function (frm, bool = true) {
	if (!frappe.user_roles.includes("Administrator")) {

		//set value
		frm.set_value('opportunity_from', "Customer");

		// Set Read Only property
		frm.set_df_property("opportunity_from", "read_only", bool);
		frm.set_df_property("company", "read_only", bool);
		frm.set_df_property("transaction_date", "read_only", bool);
		frm.set_df_property("status", "read_only", bool);
		frm.set_df_property("language", "read_only", bool);
		frm.set_df_property("naming_series", "read_only", bool);
		frm.set_df_property("sales_stage", "read_only", bool);
		frm.set_df_property("address_contact_section", "read_only", bool);


		// Set Hidden property
		frm.set_df_property("naming_series", "hidden", bool);
		frm.set_df_property("sales_stage", "hidden", bool);
		frm.set_df_property("language", "hidden", bool);
		frm.set_df_property("address_contact_section", "hidden", bool);

	}
}