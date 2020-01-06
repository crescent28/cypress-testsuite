// Test case for creating a simple Asset.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate an Asset', () => {
		cy.new_form("Asset");
		  cy.fill_field("asset_name", "One Plus 7T Pro", "Data");
   		cy.fill_field("location", "India", "Link");
      cy.fill_field("item_code", "7TP", "Link");
      cy.fill_field("custodian", "HR-EMP-0000700001", "Link");
      cy.fill_field("purchase_date", "01-01-2020", "Date");
      cy.fill_field("department", "Research & Development - CI", "Link");
      cy.fill_field("purchase_receipt", "MAT-PRE-2020-00001", "Link");
      cy.fill_field("asset_owner", "Company", "Select");
      cy.fill_field("cost_center", "Conner Industries - CI", "Link");
      cy.fill_field("available_for_use_date", "07-01-2020", "Date");
      cy.fill_field("policy_number", "123456678", "Data");
      cy.fill_field("insurance_start_date", "07-01-2020", "Date");
      cy.fill_field("to_warehouse", "Work In Progress - CIIT", "Link");

  		// cy.fill_table("items", [{"s_warehouse": "SCM Baroda - CIIT"}, {"t_warehouse": "Work In Progress - CIIT"}, {"item_code": "1019"} ,{"item_group": "Test 1"}, {"qty": "4"}] [{"s_warehouse": "Stores - CIIT"}, {"t_warehouse": "Work In Progress - CIIT"},{"item_code": "MI TV"} ,{"item_group": "All Item Groups"}, {"qty": "5"}]);
	   	cy.save();
			cy.submit();
      cy.get_toolbar("Create", "Asset Value Adjustment", "Depreciation Entry" );
		  cy.wait(1000);
	});
});
