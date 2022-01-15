import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import React, { useContext } from 'react';
import NextLink from 'next/link';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';

export default function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OF' : 'DARK_MODE_ON' });
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Amazon-clone` : 'Amazon-clone'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Shopping Cart</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Amazon-clone</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
