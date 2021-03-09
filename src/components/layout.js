import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

// import "../assets/scss/style.scss"
import "./styles/global.css"
import Footer from "./footer";
import * as styles from "../components/styles/layout.module.scss"


const Layout = ({children, className}) => {

  return (
    <div className={styles.page}>
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

