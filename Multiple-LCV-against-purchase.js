// Test case for creating a multiple Landed Cost Vouchers against a purchase document[Receipt/Invoice].

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Purchase Receipt', () => {
		cy.new_form("Purchase Receipt");
		cy.fill_field("supplier", "SHA PVT LTD", "Link");
    cy.fill_table("items", [{"item_code": "Barley"} ,{"qty": "15.00"}, {"rate": "500.00"}]);
    cy.fill_field("taxes_and_charges", "VAT 14% - TC", "Link");
    cy.save();
		cy.submit();
    
    // Go to landed cost voucher doctype and create a LCV for the Purchase receipt 
    Cypress.Commands.add('go_to_form', (Landed Cost Voucher, docname) => {
    it('Generate Landed Cost Voucher', () => {
		cy.new_form("Landed Cost Voucher");
       cy.fill_table("purchase_receipts", [{"receipt_document_type": "Purchase Receipt"} ,{"receipt_document": "MAT-PRE-2020-00003"}]);
    Cypress.Commands.add('get_button', (Get Items from Purchase Receipt);
    cy.fill_table("taxes", [{"expense_account": "CGST - TC"} ,{"description": "Test"}]);
    cy.save();
		cy.submit();
    
        // Go to landed cost voucher doctype and create another LCV for the Purchase receipt 
        
    cy.new_form("Landed Cost Voucher");
   cy.fill_table("purchase_receipts", [{"receipt_document_type": "Purchase Receipt"} ,{"receipt_document": "MAT-PRE-2020-00003"}]);
    cy.fill_table("taxes", [{"expense_account": "CGST - TC"} ,{"description": "Test"}]);
    cy.save();
		cy.submit();
	});
});
