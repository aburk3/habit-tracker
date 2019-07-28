import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavigationItems />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
