import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import * as styles from "../components/styles/postcard.module.scss"

const PostCard = ({ data }) => (
  <article className={styles.postcard}>
    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug}>
        <Img
          fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={data.frontmatter.title + " - Featured image"}
          className={styles.image}
        />
      </Link>
    ) : (
      ""
    )}
    <div className={styles.content}>
      <h2 className={styles.title_h2}>
        <Link to={data.frontmatter.slug} className={styles.title}>{data.frontmatter.title}</Link>
      </h2>
      <p className="meta">
        <time>{data.frontmatter.date}</time>
      </p>
    </div>
  </article>
)

export default PostCard
