// Test case for creating a simple Sales Invoice.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Sales Invoice', () => {
		cy.new_form("Sales Invoice");
		cy.fill_field("customer", "Burosys", "Link");
   		cy.fill_field("transaction_date", "16-10-2019", "Date");
  		cy.fill_table("items", [{"item_code": "1019"} , {"quantity": "2"}, {rate: "3,345,345.0000"}, {"amount": "6,690,690.0000"},]);
		cy.save();
				cy.submit();
    		cy.get_button("Ledger");
	});
});

