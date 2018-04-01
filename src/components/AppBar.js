import React from 'react';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.white,
    primary2Color: Colors.indigo700,
    accent1Color: Colors.redA200,
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: Colors.cyan500,
    borderColor: Colors.cyan500,
  },
  appBar: {
    height: 60,
  },
});

const style ={
  font: 'black'
}
const NavBar = () => (
<MuiThemeProvider muiTheme={muiTheme}>    
  <AppBar
    title="Menú"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={style}
  />
 </MuiThemeProvider>    
);

export default NavBar;