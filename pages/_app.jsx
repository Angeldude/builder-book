import CssBaseline from '@mui/material/CssBaseline'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import App from 'next/app'
import PropTypes from 'prop-types'
import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import { theme } from '../lib/theme'
const propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired, // eslint-disable-line
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <CacheProvider value={createCache({ key: 'css' })}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <CssBaseline />
          <Header {...pageProps} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    )
  }
}

MyApp.propTypes = propTypes
export default MyApp
