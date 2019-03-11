import React from 'react';

import Button from '../../src/Button.jsx';
import NestedChild from '../../src/NestedChild.jsx';

describe('Button', () => {
  // beforeEach(function () {
  //   cy.log('!!!!!!!!!!!!!!!!!!!!!!!!!', NestedChild);
  //   cy.stub(NestedChild, 'NestedChild', () => cy.log('stub being hit!'));
  // });

  it('can render the button - and only the button!', () => {
    cy.mount(<Button name='name in here' />);

    // NestedChild.NestedChild();
    // cy.mount(<NestedChild name='name in here' />);
  });
});
