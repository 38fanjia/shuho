import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          pathPrefix
          siteMetadata {
            title
            url
            description
          }
        }
      }
    `
  )
  const { siteMetadata } = data.site
  return (
    <Header>
      <Link to={`/`}>
        <Title>{siteMetadata.title}</Title>
      </Link>
      <Description>{siteMetadata.description}</Description>
    </Header>
  )
}

const Header = styled.header`
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

const HeaderImage = styled(Img)`
  max-width: 900px;
  width: 100%;
`
