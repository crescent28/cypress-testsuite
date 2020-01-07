// Test case for creating a simple Project

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Project', () => {
		cy.new_form("Project");
		cy.fill_field("project_name", "Testing of Frappe App", "Data");
    		cy.fill_field("expected_start_date", "08-01-2020", "Date");
    		cy.fill_field("expected_end_date", "15-01-2020", "Date");
    		cy.fill_field("department", "All Departments", "Select");
  	cy.save();
		cy.submit();
    		cy.get_toolbar("Set Status", "Completed" , "Cancelled");
	});
});
