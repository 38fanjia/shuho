import React from "react"
import { graphql } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"
import Header from '../components/header'
import Footer from '../components/footer'
import Post from '../components/post'
import Pagination from '../components/pagination'

interface EdgesType {
  node: {
    id: number
    frontmatter: {
      title: string
      date: string
    }
    html: string
  }
}
interface Props {
  pageContext: {
    currentPage: number
    numPages: number
  }
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: EdgesType[]
    }
  }
}
export default class BlogList extends React.Component<Props> {
  render() {
    const posts: EdgesType[] = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    return (
      <Layout>
        <Header />
        <PageCount>{this.props.data.allMarkdownRemark.totalCount} Posts</PageCount>
        {posts.map(({ node }) => (
          <Post key={node.id} content={node} />
        ))}
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
        />
        <Footer />
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          html
        }
      }
    }
  }
`
const PageCount = styled.h4`
  font-size: 0.8rem;
  text-align: right;
  color: inherit;
  padding-right: 5px;
`
