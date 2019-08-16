import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"

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
    </header>
  )
}

const Title = styled.h1`
  margin-top: 0;
  display: inline-block;
`
