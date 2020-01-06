// Test case for creating a simple Asset Category.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Asset Category', () => {
		cy.new_form("Asset Category");
		cy.fill_field("asset_category_name", "Medical Disposables", "Data");
   		cy.fill_table("Asset Finance Book", [{"finance_book": "2020 Finance"}, {"depreciation_method": "Straight Line"}, {"total_number_of_depreciations": "5"} ,{"frequency_of_depreciation": "Test 1"}]);
	     		cy.fill_table("Asset Category Account", [{"fixed_asset_account": "Office Equipments"}, {"accumulated_depreciation_account": "Accumulated Depreciations - CI"}, {"depreciation_expense_account": "Depreciation - CI"} ,{"capital_work_in_progress_account": "CWIP"}]);
     cy.save();
			// cy.submit();
  //     cy.get_toolbar("View", "Accounting Ledger", "Stock Ledger" );
	//	  cy.wait(1000);
	});
});
