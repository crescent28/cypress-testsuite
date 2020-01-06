// Test case for creating a simple Asset Movement.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Asset Movement', () => {
		cy.new_form("Asset Movement");
		cy.fill_field("transaction_date", "07-01-2020 14:35:3", "Link");
   		cy.fill_field("purpose", "Receipt", "Select");
      // cy.fill_field("to_warehouse", "Work In Progress - CIIT", "Link");
  		cy.fill_table("Asset Movement Item", [{"asset": "ACC-ASS-2020-00001"}, {"target_location": "Sydney"}]);
	   	cy.save();
			cy.submit();
  //    cy.get_toolbar("View", "Accounting Ledger", "Stock Ledger" );
	//	  cy.wait(1000);
	});
});
