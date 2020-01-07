// Test case for creating a Task for a Project.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Task', () => {
		cy.new_form("Task");
		cy.fill_field("subject", "Validation of login", "Data");
    		cy.fill_field("task_weight", "10", "Float");
        cy.fill_field("exp_start_date", "07-01-2020", "Date");
        cy.fill_field("exp_end_date", "21-01-2020", "Date");
     //   cy.fill_table("depends_on", [{"task": "Validate 12"} ,{"quantity": "2"}, {"basic_rate": "300"}]);
  		cy.save();
    		cy.get_button("View", "Timesheet", "Expense Claims" );
	});
});
