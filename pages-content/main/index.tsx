// import { AppBar, Container, IconButton, Toolbar } from '@material-ui/core';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { MapContainer } from './components/map-container';

export const Main = (): JSX.Element => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Elevapp</Typography>
        </Toolbar>
      </AppBar>
      <MapContainer />
    </>
  );
};
