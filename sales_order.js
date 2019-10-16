// Test case for creating a simple Sales Order, with Delivery Note.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Sales Order', () => {
		cy.new_form("Sales Order");
		cy.fill_field("customer", "Test", "Link");
    cy.fill_field("transaction_date", "16-10-2019", "Date");
  		cy.fill_table("items", [{"item_code": "1019"} ,{"delivery_date": "16-10-2019"}, {"quantity": "2"}, {rate: "3,345,345.0000"}]);
		cy.save();
				cy.submit();
    		// Creating a Delivery note against a Sales Order.
    		cy.get_toolbar("Make", "Delivery Note");
		cy.wait(1000);
    		// Ensure Paid To account is fetched after selecting mode of payment.
    		cy.wait(100);
    		cy.fill_field("taxes_and_charges", "Sales Training - CI");
    		cy.save();
		cy.submit();
    		cy.get_button("Ledger");
	});
});
