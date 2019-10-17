import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Post from '../components/post'

interface nodeTypes {
  node: {
    id: number
    frontmatter: {
      title: string
      date: string
    }
    fields: {
      slug: any
    }
    html: string
  }
}

interface queryTypes {
  site: {
    siteMetadata: {
      title: string
      url: string
      description: string
      author: string
    }
  }
  allMarkdownRemark: {
    totalCount: number
    edges: nodeTypes[]
  }
}

export default () => {
  const queryData: queryTypes = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            url,
            description
            author
          }
        }
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
  )
  const { site, allMarkdownRemark } = queryData

  return (
    <Layout>
      <Header
        title={site.siteMetadata.title}
        url={site.siteMetadata.url}
        description={site.siteMetadata.description}
      />
      <PageCount>{allMarkdownRemark.totalCount} Posts</PageCount>
      {allMarkdownRemark.edges.map(({ node }: nodeTypes) => (
        <Post key={node.id} content={node} />
      ))}
      <Footer author={site.siteMetadata.author} />
    </Layout>
  )
}

const PageCount = styled.h4`
  font-size: 0.8rem;
  text-align: right;
  color: inherit;
  padding-right: 5px;
`
