import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";


const Layout = ({children, className}) => {

  return (
    <div>
      <Header>
        <Navigation/>
      </Header>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

