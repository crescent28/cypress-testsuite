// Test case for creating a simple Quality Review.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Quality Review', () => {
		cy.new_form("Quality Review");
		cy.fill_field("goal", "GOAL-Review Task", "Link");
  		cy.fill_table("Quality Review Objective", [{"review": "Test, It was a perfect initial review."}]);
		  cy.save();
			//	cy.submit();
    		    //		cy.get_button("Ledger");
	});
});
