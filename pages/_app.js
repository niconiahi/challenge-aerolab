import React from 'react'
import App, { Container } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalState from '../state'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <CssBaseline>
          <GlobalState>
            <Component {...pageProps} />
          </GlobalState>
        </CssBaseline>
      </Container>
    )
  }
}

export default MyApp
