frappe.ui.form.on('Batch', {
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
		}
	}
}