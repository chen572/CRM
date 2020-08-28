import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
  bigButton: {
    height: '100%',
    width: '100%',
    paddingLeft: '20%',
    paddingRight: '20%',
    letterSpacing: 1.5,
    fontSize: 17,
    color: 'whitesmoke',
  },
  smallButton: {
    height: '100%',
    width: '100%',
    paddingLeft: '20%',
    paddingRight: '20%',
    letterSpacing: 1.5,
    fontSize: 17,
    color: '#14213d',
  },
  bigLink: {
    height: '100%',
    width: '25%',
    textDecoration: 'none',
  },
  smallLink: {
    width: '100%',
    height: '25%',
    textDecoration: 'none',
  },
});

function NavBarLink(props) {
  const classes = useStyles();
  const match = useMediaQuery('(min-width: 750px)');
  const { link } = props;
  return (
    <>
      <Link className={classes.bigLink} to={link.path}>
        <Button className={match ? classes.bigButton : classes.smallButton}>
          {match ? (
            <i
              style={{ color: 'whitesmoke', fontSize: 34, padding: 30 }}
              className={link.icon}
            ></i>
          ) : (
            <i
              style={{ color: '#14213d', fontSize: 34, padding: 30 }}
              className={link.icon}
            ></i>
          )}
          {match && link.text}
        </Button>
      </Link>
    </>
  );
}

export default NavBarLink;
