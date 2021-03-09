import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FiMail } from "react-icons/fi"
import * as styles from "../components/styles/footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.content}>
      <div className={styles.icon_container}>
        <FaGithubSquare className={styles.icon} />
      </div>
      <div className={styles.icon_container}>
        <MdEmail className={styles.icon} />
      </div>
      <div className={styles.icon_container}>
        <FaLinkedin className={styles.icon} />
      </div>
    </p>
  </footer>
)

export default Footer
