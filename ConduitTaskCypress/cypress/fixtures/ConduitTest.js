import Locators from './classes/locators'




const locators=new Locators()


describe('My Login Test Suite', function() 
{

    beforeEach(function(){
            //runs once before all tests in the block
        cy.fixture('example').then(function(data)
            {
            this.data=data
            }
            )
        })

it('My Login test Case with default user', function()
{
    cy.visit('https://react-redux.realworld.io/#/login')

    locators.getSignUpButton().click()
    cy.signup(this.data.username2, this.data.email2, this.data.password2)
    cy.get('.btn').click()


    if(cy.get('div .error-messages :visible'))
    {
        cy.wait(2000)
        locators.getSignInButtonHomePageConduit().click()
        cy.login(this.data.email2, this.data.password2 )

        locators.getSignInButton().click()
    }
    else
    {

        locators.getSignInButton().click()
    }
   

})

it('Create New Article & Publish ', function()
{
    cy.wait(2000)

    locators.getNewPostButton().click()
    cy.publishPage(this.data.articletitle1, this.data.aboutarticle1, this.data.articleMarkdown1, this.data.enterTags1)
    cy.wait(2000)
    cy.deleteArticle(this.data.articletitle1)
   
    locators.getNewPostButton().click()

    cy.wait(2000)
    cy.publishPage(this.data.articletitle2, this.data.aboutarticle2, this.data.articleMarkdown2, this.data.enterTags2)

    cy.deleteArticle(this.data.articletitle2)
    locators.getNewPostButton().click()


    locators.getSignUpButton().click()
    locators.getSignUpButton().click()

    locators.getLogoutButton().click()


})})
