import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { colors } from 'myconstants';
import { darken } from 'polished';

const Button = styled.button`
  background: ${({ type }) => (type === 'submit' ? '#20c576' : colors.border)};
  color: ${({ type }) => (type === 'submit' ? '#ffffff' : colors.text)};
  border-radius: 3px;
  margin-bottom: 8px;

  font-size: 1em;

  padding: 0.8rem 1rem;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ type }) =>
      type === 'submit' ? darken(0.1, '#20c576') : darken(0.2, colors.border)};
  }
`;

// type="submit" text={'submit'} handler={formHandler.onSubmit}
export default observer(({ type, text, handler }) =>
  <Button type={type} onClick={handler}>
    {text}
  </Button>
);
