// Test case for creating a feature test for Loan Repayment schedule.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Loan', () => {
		cy.new_form("Loan");
		cy.fill_field("applicant", "HR-EMP-00002", "Dynamic Link");
   		cy.fill_field("loan_type", "Personal", "Link");
  		cy.fill_field("loan_amount", "5,00,000.00", "Currency");
  		cy.fill_field("repayment_start_date", "15-02-2020", "Date");
  		cy.fill_field("mode_of_payment", "Credit Card", "Link");
  		cy.fill_field("loan_account", "Debtors - TC", "Link");
  		cy.fill_field("interest_income_account", "Service - TC", "Link"); 
      cy.fill_field("repayment_periods", "Service - TC", "Link"); 
   //   cy.fill_table("repayment_schedule", [{"payment_date": "16-02-2020"}][{"payment_date": "29-02-2020"}]);
		cy.save();
				cy.submit();
    		// Creating a Delivery note against a Sales Order.
    		cy.get_button("Create Disbursement Entry");
	//	cy.wait(1000);
    		// Ensure Paid To account is fetched after selecting mode of payment.
    		
        cy.wait(100);
		cy.submit();
    		cy.get_button("Ledger");
	});
});
