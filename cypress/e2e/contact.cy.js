it('Contact page renders', () => {
    const page = cy.visit('http://localhost:3000/contact');
  

    page.get('h1').should('have.text', 'Contact Me');
  });