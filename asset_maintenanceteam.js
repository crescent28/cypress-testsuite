// Test case for creating an Asset Maintenance Team.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Asset Maintenance Team', () => {
		cy.new_form("Asset Maintenance Team");
		cy.fill_field("maintenance_team_name", "A2Z Team", "Data");
   		cy.fill_field("maintenance_manager", "michelle@iwebnotes.com", "Link");
      // cy.fill_field("to_warehouse", "Work In Progress - CIIT", "Link");
  		cy.fill_table("Maintenance Team Member", [{"team_member": "michelle@iwebnotes.com"}, {"full_name": "Michelle"}, {"maintenance_role": "Analytics"}]);
	   	cy.save();
		//	cy.submit();
     // cy.get_toolbar("View", "Accounting Ledger", "Stock Ledger" );
		//  cy.wait(1000);
	});
});
