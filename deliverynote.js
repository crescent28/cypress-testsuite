// Test case for creating a simple Delivery Note.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Delivery Note', () => {
		cy.new_form("Delivery Note");
		  cy.fill_field("customer", "Jonas", "Link");
  		cy.fill_table("items", [{"item_code": "1019"} ,{"qty": "1"}, {"uom": "Nos"}, {rate: "3,345,345.0000"}, {amount: "3,345,345.0000"} ]);
	  	cy.fill_field("taxes_and_charges", "Sales Training - CI", "Link");
      cy.save();
			cy.submit();
    	cy.get_button("Ledger");
	});
});
