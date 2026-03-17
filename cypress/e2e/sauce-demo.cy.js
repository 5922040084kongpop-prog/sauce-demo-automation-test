describe('template spec', () => {
  it('passes', () => {
            cy.visit('https://www.saucedemo.com/');
                    
            //Login
            cy.get('[data-test="username"]').type('standard_user');
            cy.get('[data-test="password"]').type('secret_sauce');
            cy.get('[data-test="login-button"]').click();
                    
            //Select Products
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
                    
            //Review Cart
            cy.get('.shopping_cart_link').click();
            cy.contains('Sauce Labs Backpack');
            cy.contains('Sauce Labs Bike Light');
            
            //Checkout
            cy.get('[data-test="checkout"]').click();
            cy.get('[data-test="firstName"]').type('Jino');
            cy.get('[data-test="lastName"]').type('Pakan');
            cy.get('[data-test="postalCode"]').type('10400');
            cy.get('[data-test="continue"]').click();
            
            //Verify Pricing
            cy.contains('Sauce Labs Backpack');
            cy.contains('$29.99');
            cy.contains('Sauce Labs Bike Light');
            cy.contains('$9.99');
            cy.get('.summary_subtotal_label').should('contain', 'Item total');
            cy.get('.summary_tax_label').should('contain', 'Tax');
            cy.get('.summary_total_label').should('contain', 'Total');
            
            //Complete Order
            cy.get('[data-test="finish"]').click();
            cy.contains('Thank you for your order!');
            
            //Logout
            cy.get('#react-burger-menu-btn').click();
            cy.get('[data-test="logout-sidebar-link"]').click();
  })
})