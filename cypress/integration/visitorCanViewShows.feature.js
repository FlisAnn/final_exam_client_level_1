describe('Visitor can see a list shows', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: 'GET',
        url: 'https://localhost:3000',
        response: 'fx:viaplay_tvshows.json',
      })
      cy.visit("/")
    })

    it('successfully can view all the listed shows', () => {
      cy.get("[data-cy='shows-index']").within(() => {
        cy.get('.title').should('contain', "Grey's Anatomy")
      })
    })
  })
})
