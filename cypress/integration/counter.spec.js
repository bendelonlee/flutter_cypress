describe('Counter app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:55969/#/')
      cy.get('flt-semantics-placeholder').click({force: true})
    })
    it('Increments on button press', ()=>{
        cy.get(`[aria-label="0"]`)
        cy.get(`[aria-label="Increment"]`).click()
        cy.get(`[aria-label="1"]`)
    })
})