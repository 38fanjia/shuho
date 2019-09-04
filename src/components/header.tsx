import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle,
            siteUrl,
            siteDescription
          }
        }
      }
    `
  )

  return (
    <Header>
      <a href={data.site.siteMetadata.siteUrl}>
        <Title>
          {data.site.siteMetadata.siteTitle}
        </Title>
      </a>
      <Description>{data.site.siteMetadata.siteDescription}</Description>
      <HeaderImage src={'image/title.jpg'} />
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

const HeaderImage = styled.img`
  max-width: 900px;
  width: 100%;
`
