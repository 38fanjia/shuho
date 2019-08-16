import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography";

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle,
            siteDescription
          }
        }
      }
    `
  )

  return (
    <StyledHeader>
      <Link to={`/`}>
        <Title>
          {data.site.siteMetadata.siteTitle}
        </Title>
      </Link>
      <Description>{data.site.siteMetadata.siteDescription}</Description>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  text-align: center;
  padding-top: ${rhythm(1.5)};
`

const Title = styled.h1`
  margin-top: 0;
  display: inline-block;
`

const Description = styled.p`
  font-size: 0.7rem;
`
