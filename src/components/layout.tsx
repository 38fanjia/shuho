import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import {Global, css} from '@emotion/core'
import styled from '@emotion/styled'

import Header from './header'
import Footer from './footer'

interface Props {
  children?: any
}

interface queryTypes {
  site: {
    siteMetadata: {
      siteTitle: string
      siteUrl: string
      siteDescription: string
      author: string
    }
  }
}

export default ({children}: Props) => {
  const data: queryTypes = useStaticQuery(
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
  const siteMetadata = data.site.siteMetadata

  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteMetadata.siteTitle}</title>
        <link rel="canonical" href={siteMetadata.siteUrl} />
      </Helmet>
      <Global
        styles={css`
          html {
            background-color: #f8f4e6;
          }
          a {
            color: #00aa8c;
          }
        `
      }/>
      <Header
        title={siteMetadata.siteTitle}
        url={siteMetadata.siteUrl}
        description={siteMetadata.siteDescription}
      />
      {children}
      <Footer author={siteMetadata.author} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  color: #646464;
  font-family: arial,"Microsoft Yahei","微软雅黑",Tahoma,Arial,Helvetica,PingFang SC,'Alegreya',sans-serif;
`
