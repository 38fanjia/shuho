import React from "react"
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { rhythm } from "../utils/typography"

export default (data) => {
  console.log(data)
  const post = data.content
  return (
    <Wrapper>
      <Title>
        {post.frontmatter.title}{" "}
        <Date>
          — {post.frontmatter.date}
        </Date>
      </Title>
      <Body dangerouslySetInnerHTML={{ __html: post.html }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: ${rhythm}
`

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const Date = styled.span`
  color: #bbb;
`

const Body = styled.div`
  font-size: 0.8rem;
`
