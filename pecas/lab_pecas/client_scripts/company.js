frappe.ui.form.on('Company', {
	refresh: function(frm) {
	  // GAxis Dynamic Logic
	  gaxis_dynamic(frm);
	  frm.dashboard.hide();
	},
	validate: function (frm) {
		// Company
		if((frm.doc.company_name !== undefined) && (frm.doc.company_name !== null)) {
			if (frm.doc.company_name.length < 5) {
				frappe.throw(__('Company should be greater than 5 characters.'));
			}
		}

		// Abbreviation
		if((frm.doc.abbr !== undefined) && (frm.doc.abbr !== null)) {
			if (frm.doc.abbr.length < 2) {
				frappe.throw(__('Abbreviation should be greater than 2 characters.'));
			}

			if(frm.doc.abbr.length > 5) {
				frappe.throw(__('Abbreviation should be less than or equal to 5 characters.'));
			}
		}

		// PAN
		if((frm.doc.pan !== undefined) && (frm.doc.pan !== null)) {
			if(frm.doc.pan !== '') {
				if (frm.doc.pan.length != 10) {
					frappe.throw(__('PAN should be 10 characters.'));
				} else {
					var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

					if(regex.test(frm.doc.pan.toUpperCase()) == false){
						frappe.throw(__('Invalid PAN.'));
					}
		
					frm.set_value('pan', frm.doc.pan.toUpperCase());
				}
			}
		}

		// GSTIN / UIN
		if ((frm.doc.gstin !== undefined) && (frm.doc.gstin !== null)) {
			if(frm.doc.gstin !== '') {
				if (frm.doc.gstin.length != 15) {
					frappe.throw(__('GSTIN / UIN should be 15 characters.'));
				} else {
					var regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
	
					if (!regex.test(frm.doc.gstin.toUpperCase())) {
						frappe.throw(__('Invlaid GSTIN / UIN.'));
					}
					
					frm.set_value('gstin', frm.doc.gstin.toUpperCase());
				}
			}
		}

		// Company Description
		if((frm.doc.company_description !== undefined) && (frm.doc.company_description !== null)) {
			if(frm.doc.company_description !== '') {
				if(frm.doc.company_description.length < 10) {
					frappe.throw(__('Company Description should be greater than 10 characters.'));
				}
			}
		}

		// CIN
		if ((frm.doc.cin !== undefined) && (frm.doc.cin !== null)) {
			if(frm.doc.cin !== '') {
				if(frm.doc.cin.length !== 21) {
					frappe.throw(__('The lenght of CIN should be 21 characters.'));
				} else {
					var regex = /[A-Z]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/;

					if (!regex.test(frm.doc.cin.toUpperCase())) {
						frappe.throw(__('Invlaid CIN.'));
					}

					frm.set_value('cin', frm.doc.cin.toUpperCase());
				}
			}
		}
	}
});

var gaxis_dynamic = function(frm, bool=true) {
	
	//set value for abbr
	frm.set_value("abbr","PECaS");
	
	frm.get_field("gstin").set_description("GSTIN, short for Goods and Services Tax Identification Number, is a unique 15 digit identification number assigned to every taxpayer (primarily dealer or supplier or any business entity) registered under the GST regime.\n\nUIN stands for Unique Identity Number. It is the registration number given to certain specified persons , instead of GSTIN.");
	frm.get_field("pan").set_description("Permanent Account Number (PAN) is a ten-digit alphanumeric number, issued by the Income Tax Department of India.");
	frm.get_field("cin").set_description("Corporate Identification Number (CIN) is a 21 digits alpha-numeric code issued to companies incorporated within the country on being registered by the ROC situated in different states across India under the MCA.");
	
	if(!frappe.user_roles.includes("Administrator")) {
		// Set Read Only property
		frm.set_df_property("create_chart_of_accounts_based_on", "read_only", bool);
		frm.set_df_property("chart_of_accounts", "read_only", bool);
		frm.set_df_property("existing_company", "read_only", bool);

		frm.set_df_property("default_bank_account", "read_only", bool);
		frm.set_df_property("default_cash_account", "read_only", bool);
		frm.set_df_property("default_receivable_account", "read_only", bool);
		frm.set_df_property("round_off_account", "read_only", bool);
		frm.set_df_property("round_off_cost_center", "read_only", bool);
		frm.set_df_property("write_off_account", "read_only", bool);
		frm.set_df_property("exchange_gain_loss_account", "read_only", bool);
		frm.set_df_property("unrealized_exchange_gain_loss_account", "read_only", bool);
		frm.set_df_property("unrealized_profit_loss_account", "read_only", bool);

		frm.set_df_property("allow_account_creation_against_child_company", "read_only", bool);
		frm.set_df_property("default_payable_account", "read_only", bool);
		frm.set_df_property("default_expense_account", "read_only", bool);
		frm.set_df_property("default_income_account", "read_only", bool);
		frm.set_df_property("default_deferred_revenue_account", "read_only", bool);
		frm.set_df_property("default_deferred_expense_account", "read_only", bool);
		frm.set_df_property("default_discount_account", "read_only", bool);

		frm.set_df_property("cost_center", "read_only", bool);
		frm.set_df_property("default_finance_book", "read_only", bool);

		frm.set_df_property("accumulated_depreciation_account", "read_only", bool);
		frm.set_df_property("depreciation_expense_account", "read_only", bool);
		frm.set_df_property("series_for_depreciation_entry", "read_only", bool);
		frm.set_df_property("expenses_included_in_asset_valuation", "read_only", bool);
		frm.set_df_property("disposal_account", "read_only", bool);
		frm.set_df_property("depreciation_cost_center", "read_only", bool);
		frm.set_df_property("capital_work_in_progress_account", "read_only", bool);
		frm.set_df_property("asset_received_but_not_billed", "read_only", bool);

		frm.set_df_property("sales_monthly_history", "read_only", bool);
		frm.set_df_property("monthly_sales_target", "read_only", bool);
		frm.set_df_property("total_monthly_sales", "read_only", bool);

		frm.set_df_property("credit_limit", "read_only", bool);
		frm.set_df_property("transactions_annual_history", "read_only", bool);

		frm.set_df_property("exception_budget_approver_role", "read_only", bool);

		frm.set_df_property("enable_perpetual_inventory", "read_only", bool);
		frm.set_df_property("enable_provisional_accounting_for_non_stock_items", "read_only", bool);
		frm.set_df_property("default_inventory_account", "read_only", bool);
		frm.set_df_property("stock_adjustment_account", "read_only", bool);
		frm.set_df_property("stock_received_but_not_billed", "read_only", bool);
		frm.set_df_property("default_provisional_account", "read_only", bool);
		frm.set_df_property("expenses_included_in_valuation", "read_only", bool);
		frm.set_df_property("default_settings", "read_only", bool);
		frm.set_df_property("tax_id", "read_only", bool);
		frm.set_df_property("domain", "read_only", bool);
		frm.set_df_property("date_of_establishment", "read_only", bool);
		frm.set_df_property("parent_company", "read_only", bool);
		frm.set_df_property("default_holiday_list", "read_only", bool);
		frm.set_df_property("date_of_incorporation", "read_only", bool);
		frm.set_df_property("date_of_incorporation", "read_only", bool);
		frm.set_df_property("fax", "read_only", bool);
		frm.set_df_property("phone_no", "read_only", bool);
		frm.set_df_property("website", "read_only", bool);
		frm.set_df_property("email", "read_only", bool);
		frm.set_df_property("company_description", "read_only", bool);
		frm.set_df_property("sales_settings", "read_only", bool);
		frm.set_df_property("registration_details", "read_only", bool);
		

		// Set Hidden property
		frm.set_df_property("create_chart_of_accounts_based_on", "hidden", bool);
		frm.set_df_property("chart_of_accounts", "hidden", bool);
		frm.set_df_property("existing_company", "hidden", bool);

		frm.set_df_property("default_bank_account", "hidden", bool);
		frm.set_df_property("default_cash_account", "hidden", bool);
		frm.set_df_property("default_receivable_account", "hidden", bool);
		frm.set_df_property("round_off_account", "hidden", bool);
		frm.set_df_property("round_off_cost_center", "hidden", bool);
		frm.set_df_property("write_off_account", "hidden", bool);
		frm.set_df_property("exchange_gain_loss_account", "hidden", bool);
		frm.set_df_property("unrealized_exchange_gain_loss_account", "hidden", bool);
		frm.set_df_property("unrealized_profit_loss_account", "hidden", bool);

		frm.set_df_property("allow_account_creation_against_child_company", "hidden", bool);
		frm.set_df_property("default_payable_account", "hidden", bool);
		frm.set_df_property("default_expense_account", "hidden", bool);
		frm.set_df_property("default_income_account", "hidden", bool);
		frm.set_df_property("default_deferred_revenue_account", "hidden", bool);
		frm.set_df_property("default_deferred_expense_account", "hidden", bool);
		frm.set_df_property("default_discount_account", "hidden", bool);

		frm.set_df_property("cost_center", "hidden", bool);
		frm.set_df_property("default_finance_book", "hidden", bool);

		frm.set_df_property("accumulated_depreciation_account", "hidden", bool);
		frm.set_df_property("depreciation_expense_account", "hidden", bool);
		frm.set_df_property("series_for_depreciation_entry", "hidden", bool);
		frm.set_df_property("expenses_included_in_asset_valuation", "hidden", bool);
		frm.set_df_property("disposal_account", "hidden", bool);
		frm.set_df_property("depreciation_cost_center", "hidden", bool);
		frm.set_df_property("capital_work_in_progress_account", "hidden", bool);
		frm.set_df_property("asset_received_but_not_billed", "hidden", bool);

		frm.set_df_property("sales_monthly_history", "hidden", bool);
		frm.set_df_property("monthly_sales_target", "hidden", bool);
		frm.set_df_property("total_monthly_sales", "hidden", bool);

		frm.set_df_property("credit_limit", "hidden", bool);
		frm.set_df_property("transactions_annual_history", "hidden", bool);

		frm.set_df_property("exception_budget_approver_role", "hidden", bool);

		frm.set_df_property("enable_perpetual_inventory", "hidden", bool);
		frm.set_df_property("enable_provisional_accounting_for_non_stock_items", "hidden", bool);
		frm.set_df_property("default_inventory_account", "hidden", bool);
		frm.set_df_property("stock_adjustment_account", "hidden", bool);
		frm.set_df_property("stock_received_but_not_billed", "hidden", bool);
		frm.set_df_property("default_provisional_account", "hidden", bool);
		frm.set_df_property("expenses_included_in_valuation", "hidden", bool);
		frm.set_df_property("default_settings", "hidden", bool);
		frm.set_df_property("tax_id", "hidden", bool);
		frm.set_df_property("domain", "hidden", bool);
		frm.set_df_property("date_of_establishment", "hidden", bool);
		frm.set_df_property("parent_company", "hidden", bool);
		frm.set_df_property("default_holiday_list", "hidden", bool);
		frm.set_df_property("date_of_incorporation", "hidden", bool);
		frm.set_df_property("fax", "hidden", bool);
		frm.set_df_property("phone_no", "hidden", bool);
		frm.set_df_property("website", "hidden", bool);
		frm.set_df_property("email", "hidden", bool);
		frm.set_df_property("company_description", "hidden", bool);
		frm.set_df_property("sales_settings", "hidden", bool);
		frm.set_df_property("registration_details", "hidden", bool);
	}
}