describe('Counter app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:55969/#/')
      cy.get('flt-semantics-placeholder').click({force: true})
    })
    it('Increments on button press', ()=>{
        cy.get(`[aria-label="Push Count\nYou have pushed the button this many times:\n0"]`)
        cy.get(`[aria-label="Increment"]`).click();
        cy.get(`[aria-label="Push Count\nYou have pushed the button this many times:\n1"]`)
    })
})