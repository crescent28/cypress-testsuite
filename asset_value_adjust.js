// Test case for creating an Asset Value Adjustement.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Asset Value Adjustment', () => {
		cy.new_form("Asset Value Adjustment");
		cy.fill_field("date", "07-01-2020", "Date");
   		cy.fill_field("asset", "ACC-ASS-2019-00003", "Link");
      cy.fill_field("new_asset_value", "54000", "Currency");
      cy.fill_field("finance_book", "2020 Finance", "Link");

  		// cy.fill_table("items", [{"s_warehouse": "SCM Baroda - CIIT"}, {"t_warehouse": "Work In Progress - CIIT"}, {"item_code": "1019"} ,{"item_group": "Test 1"}, {"qty": "4"}] [{"s_warehouse": "Stores - CIIT"}, {"t_warehouse": "Work In Progress - CIIT"},{"item_code": "MI TV"} ,{"item_group": "All Item Groups"}, {"qty": "5"}]);
	   	cy.save();
			cy.submit();
     // cy.get_toolbar("View", "Accounting Ledger", "Stock Ledger" );
		//  cy.wait(1000);
	});
});
