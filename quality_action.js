// Test case for creating a simple Quality Action.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Quality Action', () => {
		cy.new_form("Quality Action");
		cy.fill_field("document_name", "REV-00025", "Dynamic Link");
   	//	cy.fill_field("from_warehouse", "Work In Progress - CIIT", "Link");
  		cy.fill_table("Quality Action Resolution", [{"problem": "Validating quality before delivery"} ,{"resolution": "Testing after Packaging and after the final schedule of delivery"}]);
   //   cy.fill_field("project", "Athlete", "Link");
      
		  cy.save();
		//		cy.submit();
    		   // 		cy.get_button("Ledger");
	});
});
