import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import BlogListHome from "../components/project-list-home"
import SEO from "../components/seo"
import * as styles from "../components/styles/homepage.module.scss"
import { CgChevronDown } from "react-icons/cg"
import { IconContext } from "react-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 480
              maxHeight: 480
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ""
  return (
    <IconContext.Provider
      value={{
        color: "white",
        size: "2.5rem",
      }}
    >
      <Layout>
        <SEO />
        <div className={styles.pageContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{frontmatter.title}</h1>
            <p className={styles.tagline}>{frontmatter.tagline}</p>
            <CgChevronDown
              className={styles.down_arrow}
              onClick={() => scrollTo("#projects")}
            />
          </div>
          <div className={styles.imageContainer}>
            {Image ? (
              <Img
                fluid={Image}
                alt={frontmatter.title + " - Featured image"}
                className={styles.featuredImage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div id="projects">
          <BlogListHome />
        </div>
      </Layout>
    </IconContext.Provider>
  )
}

export default HomePage
