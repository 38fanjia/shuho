import React from "react"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"
import Header from './header'
import Footer from './footer'

export default ({ children }) => {
  return (
    <Wrapper>
      <Header />
        {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`
