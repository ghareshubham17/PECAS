frappe.ui.form.on('User', {
  refresh: function (frm) {
    // GAxis Dynamic Logic
    gaxis_dynamic(frm);
  },
  validate: function (frm) {
    validate_name('First Name', frm.doc.first_name);
    validate_name('Middle Name', frm.doc.middle_name);
    validate_name('Last Name', frm.doc.last_name);
  },
});


var gaxis_dynamic = function (frm, bool = true) {
  if (!frappe.user_roles.includes("Administrator")) {
    // Set Read Only property
    frm.set_df_property("email_signature", "read_only", bool);
    frm.set_df_property("thread_notify", "read_only", bool);
    frm.set_df_property("send_me_a_copy", "read_only", bool);
    frm.set_df_property("allowed_in_mentions", "read_only", bool);
    frm.set_df_property("user_emails", "read_only", bool);

    frm.set_df_property("banner_image", "read_only", bool);
    frm.set_df_property("desk_theme", "read_only", bool);

    frm.set_df_property("document_follow_notify", "read_only", bool);

    frm.set_df_property("social_logins", "read_only", bool);

    // Set Hidden property
    frm.set_df_property("email_signature", "hidden", bool);
    frm.set_df_property("thread_notify", "hidden", bool);
    frm.set_df_property("send_me_a_copy", "hidden", bool);
    frm.set_df_property("allowed_in_mentions", "hidden", bool);
    frm.set_df_property("user_emails", "hidden", bool);

    frm.set_df_property("banner_image", "hidden", bool);
    frm.set_df_property("desk_theme", "hidden", bool);

    frm.set_df_property("document_follow_notify", "hidden", bool);

    frm.set_df_property("social_logins", "hidden", bool);
  }
}

var validate_name = function (label, value) {
  const regex = /^[a-zA-Z0-9 ]{2,140}$/; // Regular expression to match only alphanumeric characters and spaces

  if ((value !== undefined) && (value !== null)) {
    if (value !== '') {
      if (!regex.test(value)) {
        frappe.throw(__(`Invalid ${label}.`));
      }
    }
  }
}