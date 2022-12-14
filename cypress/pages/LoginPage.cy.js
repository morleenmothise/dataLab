class LoginPage{
    elements = {
        usernameInput: () => cy.get('#j_username'),
        passwordInput: () => cy.get('#j_password'),
        loginBtn: () => cy.get('#loginButton'),
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLogin(){
        this.elements.loginBtn().click()
    }

    submitLogin(username,passowrd){
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(passowrd);
        this.elements.loginBtn().click();
    }
    
}

export const loginPage = new LoginPage();