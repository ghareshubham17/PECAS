frappe.ui.form.on('Address', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
	  gaxis_dynamic(frm);
	},
	validate: function(frm) {
        if((frm.doc.address_title !== undefined) && (frm.doc.address_title !== null)) {
            if(frm.doc.address_title.length < 5) {
                frappe.throw(__("Address Title should be greater than or equal to 5 characters."));
            }
        }

        if((frm.doc.address_line1 !== undefined) && (frm.doc.address_line1 !== null)) {
            if(frm.doc.address_line1.length < 5) {
                frappe.throw(__("Address Line 1 should be greater than or equal to 5 characters."));
            }
        }

        if((frm.doc.address_line2 !== undefined) && (frm.doc.address_line2 !== null)) {
            if(frm.doc.address_line2.length < 5) {
                frappe.throw(__("Address Line 2 should be greater than or equal to 5 characters."));
            }
        }

        if((frm.doc.city !== undefined) && (frm.doc.city !== null)) {
            if(frm.doc.city.length < 4) {
                frappe.throw(__("City should be greater than 4 characters."));
            }
        }
    },
});

var gaxis_dynamic = function(frm, bool=true) {
	if(!frappe.user_roles.includes("Administrator")) {
        // If form is new, hide disabled field
        if(frm.is_new()) {
            frm.set_df_property('disabled', 'hidden', true);
        }
	}
}