context('Table MultiSelect', () => {	
	beforeEach(() => {
	cy.login();
	});
	
	it(‘Newsletter’, () => {
	cy.new_form(“Newsletter”);
	// cy.fill_field(“new_item_code”, “123", "Link");
	
	cy.fill_table(“email_group", [{“email_group": "Test"} , {“total_subscribers": “2”}]);
	cy.fill_field(“send_from”, "Michelle Conner <mitali@iwebnotes.com>", "Date");
	cy.fill_field(“subject”, “Test", “Data");
	cy.fill_field(“message”, “Test", “Data");
	cy.save();
	// cy.submit();
		cy.get_toolbar("Send");
	});
	});
