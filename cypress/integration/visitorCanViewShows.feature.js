describe('Visitor can see a list shows', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: 'GET',
        url: 'https://content.viaplay.se/pc-se/serier/samtliga',
        response: 'fx:viaplay_tvshows.json',
      })
      cy.visit("/")
    })

  

    it('successfully view all listed shows', () => {
      cy.get("[data-cy='shows-index']").within(() => {
        cy.get('.title').should('contain', "Grey's Anatomy")
      })
    })
  })
})
