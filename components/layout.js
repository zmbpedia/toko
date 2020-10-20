import Foot from "./footer";
import Nav from "./nav";
import React from 'react'
import { initGA, logPageView } from '../utils/analytics'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <>
       <Nav />
        {this.props.children}
         <Foot />
      </>
    )
  }
}
