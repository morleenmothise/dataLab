Feature: Login page

    Feature User will successfully log in to impactradius

    Background: 
    Given A web web broswer is on the impactradius login page
    Scenario: Login successfully
    When A user enters the username , and password and clicks on login button
         |username  | password   |
         |emperkins | 5umbrella9 | 
    Then impactradius loading page must be dispalyed
    