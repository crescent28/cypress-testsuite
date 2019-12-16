// Test case for creating a simple Stock Entry for Material Receipt.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Stock Entry for Material Receipt', () => {
		cy.new_form("Stock Entry");
		cy.fill_field("stock_entry_type", "Material Receipt", "Link");
   		cy.fill_field("to_warehouse", "Work In Progress - CIIT", "Date");
      cy.fill_table("items", [{"t_warehouse": "Work In Progress - CIIT"} ,{"item_code": "1019"}, {"item_group": "Test 1"}, {qty: "3"}][{"t_warehouse": "WIP Chennai - CIIT"} ,{"item_code": "MI TV"}, {"item_group": "All Item Groups"}, {qty: "6.0"}]);
		cy.save();
				cy.submit();
    		cy.get_button("Ledger");
	});
});
