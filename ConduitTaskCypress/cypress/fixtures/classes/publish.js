class PublishPage
{
  
    getArticleTitle()
        {
            return cy.get(':nth-child(1) > .form-control')
        }
    
    getAtricleAbout()
        {
           return cy.get(':nth-child(2) > .form-control')
        }

    getArticleMarkdown()
        {
            return cy.get(':nth-child(3) > .form-control')
        }
    getArticleTags()
    {
        return cy.get(':nth-child(4) > .form-control')
    }
    
}
    export default PublishPage;
