import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import MyCatsPage from './MyCatsPage.js';

import { Tab } from 'semantic-ui-react'
//import _ from 'lodash'


class App extends Component {




  render() {

    let panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane><MyCatsPage/></Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]
    return (
      <div>
      $500
      <Tab panes={panes} />
      </div>
    );
  }
}





export default App;
