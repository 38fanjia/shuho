import React from "react"
import styled from '@emotion/styled'

import { rhythm } from "../utils/typography"

export default (data) => {
  console.log(data)
  const post = data.content
  return (
    <Wrapper>
      <Date>{post.frontmatter.date}</Date>
      <Title>
        {post.frontmatter.title}
      </Title>
      <Body dangerouslySetInnerHTML={{ __html: post.html }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: ${rhythm(1)};
  background-color: #fff;
  padding: ${rhythm(1.5)};
  border-radius: ${rhythm(1/2)};
`

const Title = styled.h3`
  margin: 0;
  padding-left: ${rhythm(1/2)};
  display: inline-block;
  font-size: 0.9rem;
`

const Date = styled.p`
  color: #00aa8c;
  display: inline-block;
  font-size: ${rhythm(1)};
`

const Body = styled.div`
  color: #646464;
  line-height: 1.7;
  font-size: 0.8rem;

  li {
    margin-bottom: 0;

    p {
      margin-bottom: 0;
    }

    ul {
      margin-top: 0;
    }
  }
`
