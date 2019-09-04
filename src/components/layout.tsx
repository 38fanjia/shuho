import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './footer'

export default ({ children }: any) => {
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
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.siteTitle}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  color: #646464;
  font-family: arial,"Microsoft Yahei","微软雅黑",Tahoma,Arial,Helvetica,PingFang SC,'Alegreya',sans-serif;
`
