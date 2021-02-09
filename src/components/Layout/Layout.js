import React from 'react';
import Auxy from '../../containers/hoc/Auxy';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Auxy>
    \<Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Auxy>
);

export default layout;
