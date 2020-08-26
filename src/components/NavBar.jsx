import React from 'react';
import {
  AppBar,
  Drawer,
  makeStyles,
  Typography,
  useMediaQuery,
  Grid,
} from '@material-ui/core';
import NavBarLink from './NavBarLink';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '8vh',
    background: '#14213d',
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: '20%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    height: '8vh',
    backgroundColor: '#14213d',
  },
});

function NavBar() {
  const classes = useStyles();
  const match = useMediaQuery('(min-width:750px)');
  const links = [
    { text: 'Home', path: '/', icon: 'fas fa-house-user' },
    { text: 'Clients', path: '/clients', icon: 'fas fa-users' },
    { text: 'Actions', path: '/actions', icon: 'fas fa-tags' },
    { text: 'Analytics', path: '/analytics', icon: 'fas fa-chart-area' },
  ];

  return (
    <>
      {match ? (
        <AppBar className={classes.root} position='sticky'>
          {links.map((l) => (
            <NavBarLink key={l.text} link={l} />
          ))}
          <Typography className={classes.logo} variant='h2'>
            CRM
          </Typography>
        </AppBar>
      ) : (
        <Drawer variant='permanent' className={classes.drawer} anchor='top'>
          <Grid container direction='row' wrap='nowrap'>
            {links.map((l) => (
              <NavBarLink key={l.text} link={l} />
            ))}
          </Grid>
        </Drawer>
      )}
    </>
  );
}

export default NavBar;
