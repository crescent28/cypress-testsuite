// Test case for creating a Quality Meeting.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Create Quality Meeting', () => {
		cy.new_form("Sales Invoice");
		cy.fill_table("Quality Meeting Agenda", [{"agenda": "To validate and decide the quality of deliverables of the Education committee"}]);
		cy.fill_table("Quality Meeting Minutes", [{"document_name": "REV-00025"},{minute: "45"}]);
    cy.save();
		//cy.submit();
    //		cy.get_button("Ledger");
	});
});
