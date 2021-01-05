import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  children?: any
}

interface queryTypes {
  site: {
    siteMetadata: {
      title: string
      url: string
    }
  }
}

export default ({ children }: Props) => {
  const data: queryTypes = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            url
          }
        }
      }
    `
  )
  const siteMetadata = data.site.siteMetadata

  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteMetadata.title}</title>
        <link rel="canonical" href={siteMetadata.url} />
      </Helmet>
      <Global
        styles={css`
          html {
            background-color: #f8f4e6;
          }
          a {
            color: #00aa8c;
          }
        `}
      />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  color: #646464;
  font-family: arial, 'Microsoft Yahei', '微软雅黑', Tahoma, Arial, Helvetica,
    PingFang SC, 'Alegreya', sans-serif;
`
