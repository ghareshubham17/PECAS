frappe.ui.form.on('Contact', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
	  gaxis_dynamic(frm);
	},
});

var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {
		// Set Read Only property
		frm.set_df_property("user", "read_only", bool);

		// Set Hidden property
		frm.set_df_property("user", "hidden", bool);
	}
}