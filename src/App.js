import React, { Component } from 'react';
import styled from 'styled-components';
import DevTools from 'mobx-react-devtools';
import { Provider } from 'mobx-react';
import FontFaceObserver from 'fontfaceobserver';
import * as stores from './stores';
import DayContainer from './containers/DayContainer';
import './globalstyles';

// load the fonts in promises because no flash woohoo flash
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(
  () => {
    document.body.classList.add('font-opensans');
  },
  () => {
    // doing this for progressive app
    document.body.classList.remove('font-opensans');
  }
);

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  height: 100vh;
  background-color: #4a5170;
  justify-content: center;
`;

class App extends Component {
  render() {
    // save app.js cause we whant some routing later on.
    return (
      // Provider <-> inject
      <Provider stores={stores}>
        <Wrapper>
          <DayContainer />
          <DevTools />
        </Wrapper>
      </Provider>
    );
  }
}
export default App;
