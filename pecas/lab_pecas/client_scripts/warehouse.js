frappe.ui.form.on('Warehouse', {
	refresh: function(frm) {
	    // GAxis Dynamic Logic
		gaxis_dynamic(frm);
	},
	after_save:function(frm) {
        frappe.ui.toolbar.clear_cache();
	}
})

var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {
        // If form is new, hide disabled field
        if(frm.is_new()) {
            frm.set_df_property('disabled', 'hidden', true);
        } else {
			frm.set_df_property('disabled', 'hidden', false);
		}
	}
}