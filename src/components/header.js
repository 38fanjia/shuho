import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <ListItem>
    <Link to={props.to}>{props.children}</Link>
  </ListItem>
)

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle,
            siteUrl
          }
        }
      }
    `
  )

  return (
    <header>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.siteTitle}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>
      <Link to={`/`}>
        <Title>
          {data.site.siteMetadata.siteTitle}
        </Title>
      </Link>
      <Navigation>
        <ListLink to={`/archives/`}>Archive</ListLink>
      </Navigation>
    </header>
  )
}

const Title = styled.h1`
  margin-top: 0;
  display: inline-block;
`

const Navigation = styled.ul`
  float: right;
  list-style: none;
`

const ListItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`
