// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("Item Group", {

	refresh: function (frm) {
		// GAxis Dynamic Logic
		gaxis_dynamic(frm);
	}

})

var gaxis_dynamic = function (frm, bool = true) {
	if (!frappe.user_roles.includes("Administrator")) {
		// Set Read Only property
		frm.set_df_property("sb9", "read_only", bool);


		// Set Hidden property
		frm.set_df_property("sb9", "hidden", bool);
	}
}