import LoginPage from '.././fixtures/classes/login'
import SignUpPage from '.././fixtures/classes/signup'
import PublishPage from '../fixtures/classes/publish'

const loginPage=new LoginPage()

Cypress.Commands.add('login', (email, password) => {

    loginPage.getEmailTextBox().type(email)
    loginPage.getPasswordTextBox().type(password)
})

const signUpPage=new SignUpPage()
Cypress.Commands.add('signup', (usernameSignup,emailSignUp, passwordSignUp) => {

    signUpPage.getUsernameTextBox().type(usernameSignup)
    signUpPage.getEmailTextBox().type(emailSignUp)
    signUpPage.getPasswordTextBox().type(passwordSignUp)

})

const publishPage=new PublishPage()
Cypress.Commands.add('publishPage', (articleTitle,articleAbout, articleMarkdown, articleTags) =>
{
    publishPage.getArticleTitle().type(articleTitle)
    publishPage.getAtricleAbout().type(articleAbout)
    publishPage.getArticleMarkdown().type(articleMarkdown)
    publishPage.getArticleTags().type(articleTags)
    cy.get('.btn').click()

})
Cypress.Commands.add('deleteArticle', (articleTitlePost) =>
{
    cy.get('div h1').each(($el, index, $list)=>
    {
        const newTry=$el.text()
        if(newTry.includes(articleTitlePost))
        {
            cy.get('.btn-outline-danger').click()
            cy.wait(2000)
        }
    })

})