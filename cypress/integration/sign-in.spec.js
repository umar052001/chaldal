describe("SignIn component", () => {
    it("renders the sign-in form", () => {
        cy.visit("localhost:3000/"); 

        // Verify that the form elements are rendered
        cy.get('input[name="username"]').should("exist");
        cy.get('input[name="password"]').should("exist");
        cy.get('button[type="submit"]').should("exist");
    });

    it("signs in successfully", () => {
        cy.visit("/"); 

        cy.get('input[name="username"]').type("admin@admin.com");
        cy.get('input[name="password"]').type("adminadmin");

        cy.get('button[type="submit"]').click();

        // Assert the successful sign-in behavior
        cy.url().should("include", "localhost:3000/dashboard");
    });

});
