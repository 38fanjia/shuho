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
            author
          }
        }
      }
    `
  )

  return (
    <Footer>
      <p>© 2019 {data.site.siteMetadata.author}</p>
    </Footer>
  )
}

const Footer = styled.footer`
  margin: ${rhythm(2)} 0 ${rhythm(1 / 2)};
  text-align: center;
`
