// Test case for creating a simple Quality Feedback template.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Quality Feedback Template', () => {
		cy.new_form("Quality Feedback Template");
		cy.fill_field("template", "Quality 2020", "Data");
   //		cy.fill_field("from_warehouse", "Work In Progress - CIIT", "Link");
        cy.fill_table("Quality Feedback Template Parameter", [{"parameter": "Size"}, {"parameter": "Packaging"}, {"parameter": "Color Validation"}, {"parameter": "Sterlisation"}]);      
		  cy.save();
		//		cy.submit();
    		 //   		cy.get_button("Ledger");
	});
});
