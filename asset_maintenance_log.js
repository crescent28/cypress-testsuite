// Test case for creating an Asset Maintenance Log.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Asset Maintenance Log', () => {
		cy.new_form("Asset Maintenance Log");
		cy.fill_field("asset_maintenance", "ACC-ASS-2020-00001", "Link");
   		cy.fill_field("task", "Assembling", "Link");
     // cy.fill_field("maintenance_status", "Cancelled", "Select"); 
     cy.fill_field("actions_performed", "Assembling of the complete sub assemblies done. ", "Text Editor");
  	//	cy.fill_table("items", [{"s_warehouse": "SCM Baroda - CIIT"}, {"t_warehouse": "Work In Progress - CIIT"}, {"item_code": "1019"} ,{"item_group": "Test 1"}, {"qty": "4"}] [{"s_warehouse": "Stores - CIIT"}, {"t_warehouse": "Work In Progress - CIIT"},{"item_code": "MI TV"} ,{"item_group": "All Item Groups"}, {"qty": "5"}]);
	   	cy.save();
			cy.submit();
      cy.get_toolbar("View", "Accounting Ledger", "Stock Ledger" );
		  cy.wait(1000);
	});
});
