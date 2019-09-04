import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import Post from '../components/post'

export default ({ data }: any) => {
  const query = graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `
  return (
    <Layout>
      <PageCount>{data.allMarkdownRemark.totalCount} Posts</PageCount>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.id} content={node} />
      ))}
    </Layout>
  )
}

const PageCount = styled.h4`
  font-size: 0.8rem;
  text-align: right;
  color: inherit;
  padding-right: 5px;
`
