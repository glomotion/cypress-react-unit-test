/// <reference types="cypress" />

import { Button } from '../../src/Button.jsx';
import React from 'react';

describe('Button', () => {
  it('can be orange', () => {
    cy.mount(<Button name='name in here' />);

  });
});
