// Test case for creating a simple Work Order

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Work Order', () => {
	 cy.new_form("Work Order");
	 cy.fill_field("production_item", "1019", "Link");
         cy.fill_field("wip_warehouse", "All Warehouses - CIIT", "Link");
	 cy.fill_field("fg_warehouse", "Stores - CIIT", "Link");
   	 cy.fill_field("qty", "1", "Float");
	 cy.fill_field("production_item", "1019", "Link");
         cy.fill_field("planned_start_date","24-12-2019 15:28:24", Datetime);
  	//	cy.fill_table("required_items", [{"item_code": "1019"} ,{"source_warehouse": "16-10-2019"}, {"quantity": "2"}, {rate: "3,345,345.0000"}]);
	 cy.save();
	 cy.submit();
    	 cy.get_button("Ledger");
	});
});
© 2019 GitHub, Inc.
