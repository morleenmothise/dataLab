import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
//import {LoginPage} from '.pages/LoginPage'
import { loginPage } from "../../pages/LoginPage.cy";

Given ("A web web broswer is on the impactradius login page" , () => {
    cy.visit("https://member-stage6.impactradius.net/login.user");    
});

When("A user enters the username , and password and clicks on login button", (datatable) =>{
    datatable.hashes().forEach((row) => {
        cy.get("#j_username").clear();
        cy.get("#j_username").type(row.username);
        cy.get("#j_password").clear();
        cy.get("#j_password").type(row.password);
        cy.get("#loginButton").click();
      });
});

Then ("impactradius loading page must be dispalyed", () => {
    cy.wait(5000)
    cy.url().should("contains", "/secure/advertiser/engage/aview.ihtml")
})