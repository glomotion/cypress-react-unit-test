import React from 'react';

import Button from '../../src/Button.jsx';
import HelloWorld from '../../src/hello-world.jsx';

describe('Button', () => {
  beforeEach(function () {
    cy.log('!!!!!!!!!!!!!!!!!!!!!!!!!', HelloWorld);
    cy.stub(HelloWorld, 'HelloWorld').returns(<div>moo cow</div>);
  });

  it('can render the button - and only the button!', () => {
    cy.mount(<Button name='name in here' />);
    // cy.mount(<HelloWorld name='name in here' />);
  });
});
