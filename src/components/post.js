import React from 'react'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'

export default (data) => {
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

const Wrapper = styled.article`
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
  word-wrap: break-word;
  word-break: keep-all;
  padding-left: 50px;

  h2 {
    font-size: ${rhythm(0.8)};
    color: inherit;
    position: relative;
    background: linear-gradient(transparent 60%, #91ceb8 0%);
    padding: 5px 0 5px 5px;
    width: 50%;
    max-width: 250px;
  }

  li {
    margin-bottom: 0;

    p {
      margin-bottom: 0;
    }

    ul {
      margin-top: 0;
    }
  }

  pre {
    overflow-y: scroll;
  }

  @media screen and (max-width: 768px){
    padding: 0 10px;
  }
`
