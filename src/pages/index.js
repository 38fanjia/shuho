import React from "react"
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { rhythm } from "../utils/typography"
import Layout from '../components/layout'
import Post from '../components/post'

export default ({data}) => (
  <Layout>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Post id={node.id} content={node} />
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const Text = styled.div`
  font-size: 0.8rem;
`
