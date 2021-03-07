import React from "react"
import * as styles from "../components/styles/header.module.scss"

const Header = ({children}) => (
  <header className={styles.container}>
    {children}
  </header>
)

export default Header