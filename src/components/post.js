import React from 'react'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'

export default (data) => {
  console.log(data)
  const post = data.content
  return (
    <Wrapper>
      <div>
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.frontmatter.date}</Date>
      </div>
      <Body dangerouslySetInnerHTML={{ __html: post.html }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: ${rhythm(3)};
`

const Title = styled.div`
  font-size: ${rhythm(1)};
  display: flex;
  align-items: center;

  &::after {
    content: '';
    border-top: 1px solid;
    flex-grow: 1;
    margin-left: 10px;
  }
`

const Date = styled.h3`
  font-size: ${rhythm(0.7)};
  font-weight: normal;
  color: #00aa8c;
  text-align: right;
  margin: 0;
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
