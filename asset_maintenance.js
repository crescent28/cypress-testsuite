// Test case for creating a simple Asset Maintenance.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Asset Maintenance', () => {
		cy.new_form("Asset Maintenance");
		  cy.fill_field("asset_name", "ACC-ASS-2020-00001", "Link");
   		cy.fill_field("maintenance_team", "Assembling", "Link");
      cy.fill_field("to_warehouse", "Work In Progress - CIIT", "Link");
  		cy.fill_table("Asset Maintenance Task", [{"maintenance_task": "Assembling"}, {"periodicity": "Weekly"}]);
	   	cy.save();
		//	cy.submit();
     // cy.get_toolbar("View", "Accounting Ledger", "Stock Ledger" );
		//  cy.wait(1000);
	});
});
