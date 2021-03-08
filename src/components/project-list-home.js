import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

import * as styles from "../components/styles/projectlisthome.module.scss"

const PostMaker = ({ data }) => (
  <>
    <section className={styles.section}>
      <h2 className={styles.section_title}>FEATURED PROJECTS</h2>
      <div className={styles.grid}>{data}</div>
      <Link className={styles.button_more} to="/projects">
        MORE
        <RiArrowRightSLine className={styles.arrow} />
      </Link>
    </section>
  </>
)

export default function BlogListHome() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "blog-post" } } }
            limit: 3
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  slug
                  title
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posts = data.allMarkdownRemark.edges
          .filter(edge => !!edge.node.frontmatter.date)
          .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
        return <PostMaker data={posts} />
      }}
    />
  )
}
