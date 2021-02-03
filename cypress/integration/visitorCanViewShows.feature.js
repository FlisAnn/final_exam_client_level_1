describe('Visitor can see a list shows', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: "GET",
        url: "http://localhost:3000/shows",
        response: "fx:",
      })
      cy.visit("/")
    });
    it("successfully view all listed shows")
    
  })
  
})
