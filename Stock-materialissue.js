// Test case for creating a simple Stock Entry.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Stock Entry', () => {
		cy.new_form("Stock Entry");
		cy.fill_field("stock_entry_type", "Material Issue", "Link");
   		cy.fill_field("from_warehouse", "Work In Progress - CIIT", "Link");
  		cy.fill_table("items", [{"item_code": "1019"} ,{"item_group": "Test 1"}, {"quantity": "2"}]);
      cy.fill_field("project", "Athlete", "Link");
      
		  cy.save();
				cy.submit();
    		    		cy.get_button("Ledger");
	});
});
