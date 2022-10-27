class LoginPage
{
    getEmailTextBox()
    {
        return cy.get('div.auth-page div.container.page div.row div.col-md-6.offset-md-3.col-xs-12 form:nth-child(3) fieldset:nth-child(1) fieldset.form-group:nth-child(1) > input.form-control.form-control-lg') 
    }

    getPasswordTextBox()
    {
        return cy.get('div.auth-page div.container.page div.row div.col-md-6.offset-md-3.col-xs-12 form:nth-child(3) fieldset:nth-child(1) fieldset.form-group:nth-child(2) > input.form-control.form-control-lg')
    }
}

export default LoginPage;