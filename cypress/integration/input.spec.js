describe('Counter app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5662/#/', {timeout: 30000})
      cy.get('flt-semantics-placeholder', {timeout: 30000}).click({force: true})
    })
    it('Increments on button press', ()=>{
        const text = 'myUserName123'
        cy.get(`[aria-label="Enter User Name"]`).type(text)
        cy.get(`[aria-label="Enter User Name"]`).then((inputElement)=>{
            expect(inputElement[0].value).equals(text)
        })
    })
})