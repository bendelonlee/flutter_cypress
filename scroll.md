Able to simulate a scroll event in chrome dev tools calling dispatchEvent with a Wheel event on the flt-glass-pane element at a position where the scrollable exists.

This suggests it would be possible to simulate a scroll in Cypress.

Tried it out in this test case:

```
cy.get(`[aria-label="My Reorderable List"]`).then((scrollElement)=>{
        const scrollRect = scrollElement[0].getBoundingClientRect()
        const scrollCenterX = scrollRect.x + scrollRect.width / 2
        const scrollCenterY = scrollRect.y + scrollRect.height / 2
        const wheelEvent = new WheelEvent('wheel', 
          {
           deltaY: 500,
           bubbles: true, 
           clientX: scrollCenterX, 
           clientY: scrollCenterY
          })
        cy.get('flt-glass-pane').then((paneElement) => {
          paneElement[0].dispatchEvent(wheelEvent)
        })
      })  
```
paneElement[0].dispatchEvent(wheelEvent) results in an error from dart_sdk.js:

```
Expected a value of type 'Event$', but got one of type 'NativeJavaScriptObject'
```

Not sure exactly what the problem is here or how / if it would be possible to solve it in Cypress.

Would probably be easier to make the scrollable widget listen to option / alt + arrows.
