import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { CgMenuRightAlt, CgClose } from "react-icons/cg"
import * as styles from "../components/styles/navigation.module.css"
import classNames from "classnames/bind"

let cx = classNames.bind(styles)

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }

    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))

    let toggleBtnClass = cx({
      menu_trigger: true,
      active: this.state.showMenu,
    })

    let drawerClass = cx({
      drawer: true,
      active: this.state.showMenu,
    })

    return (
      <IconContext.Provider
        value={{
          color: "white",
          size: "2rem",
        }}
      >
        <nav className={styles.container}>
          <button onClick={this.handleToggleClick} className={toggleBtnClass}>
            <div className={styles.icon_menu}>
              <CgMenuRightAlt />
            </div>
            <div className={styles.icon_close}>
              <CgClose />
            </div>
          </button>
          <div className={drawerClass}>
            <ul className={styles.nav_list}>{listMenuItems}</ul>
          </div>
        </nav>
      </IconContext.Provider>
    )
  }
}

export default Navigation
