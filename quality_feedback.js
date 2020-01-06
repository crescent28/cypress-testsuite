// Test case for creating a simple Quality Feedback.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Quality Feedback', () => {
		cy.new_form("Quality Feedback");
		cy.fill_field("document_name", "Material Issue", "Link");
   		cy.fill_field("template", "TMPL-Quality 2020", "Link");
  	//	cy.fill_table("parameters", [{"parameters": "Size"} ,{"feedback": "Tested"}] [{"parameters": "Packaging"} ,{"feedback": "Test and Validate Pending"}] [{"parameters": "Color Validation"} ,{"feedback": "Tested"}] [{"parameters": "Sterlisation"} ,{"feedback": "Tested"}] );
   //   cy.fill_field("project", "Athlete", "Link");
      
		  cy.save();
			//	cy.submit();
    		    	//	cy.get_button("Ledger");
	});
});
