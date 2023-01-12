import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { CreateReport } from "../../pages/CreateReport.cy";
  Given ("A web web broswer is on the impactradius login page" , () => {
    cy.visit("https://member-stage6.impactradius.net/login.user");    
});
