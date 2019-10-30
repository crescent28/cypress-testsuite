context('Table MultiSelect', () => {	
	beforeEach(() => {
	cy.login();
	});
	
	it("Generate Product Bundle", () => {
	cy.new_form(“Product Bundle”);
	cy.fill_field("new_item_code", “123", "Link");
	// cy.fill_field(“transaction_date”, "16-10-2019", "Date");
	cy.fill_table("items", [{"item_code": ""} ,{"qty": "2"}, {“description": “1019"}]);
	cy.save();
	cy.submit();
	});
	});
