// Test case for creating a simple Issue.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate a New Issue', () => {
		cy.new_form("Issue");
		cy.fill_field("subject", "Issue in  creating a custom Doctype", "Data");
   		cy.fill_field("priority", "High", "Link");
         		cy.fill_field("customer_name", "Burosys", "Data");
            cy.fill_field("issue_type", "Critical", "Link");
            cy.fill_field("raised_by", "mitali@iwebnotes.com", "Data");
            cy.fill_field("description", "This is a test account issue.", "Text Editor");
  	//	cy.fill_table("items", [{"item_code": "1019"} ,{"delivery_date": "16-10-2019"}, {"quantity": "2"}, {rate: "3,345,345.0000"}]);
				cy.save();
		cy.submit();
      cy.get_toolbar("Make", "Task" );
	});
});
