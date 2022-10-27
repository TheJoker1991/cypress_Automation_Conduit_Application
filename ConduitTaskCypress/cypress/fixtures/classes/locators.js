class Locators
{
getSignInButton()
{
return cy.get("div.auth-page div.container.page div.row div.col-md-6.offset-md-3.col-xs-12 form:nth-child(3) fieldset:nth-child(1) > button.btn.btn-lg.btn-primary.pull-xs-right:nth-child(3)")
}

getSignUpButton()
{
    return cy.get("nav.navbar.navbar-light div.container ul.nav.navbar-nav.pull-xs-right li.nav-item:nth-child(3) > a.nav-link")
}
getLogoutButton()
{
    return cy.get("div.settings-page div.container.page div.row div.col-md-6.offset-md-3.col-xs-12 > button.btn.btn-outline-danger:nth-child(4)")
}

getSignInButtonHomePageConduit()
{
    return cy.get("nav.navbar.navbar-light div.container ul.nav.navbar-nav.pull-xs-right li.nav-item:nth-child(2) > a.nav-link")
}
getNewPostButton()
{
    return cy.get('nav.navbar.navbar-light div.container ul.nav.navbar-nav.pull-xs-right li.nav-item:nth-child(2) > a.nav-link')
}

}


export default Locators;

