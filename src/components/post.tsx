import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

interface Props {
  content: {
    frontmatter: {
      title: string
      date: string
    }
    html: string
  }
}

export default ({ content }: Props) => {
  return (
    <Wrapper>
      <div>
        <Title>{content.frontmatter.title}</Title>
        <Date>{content.frontmatter.date}</Date>
      </div>
      <Body dangerouslySetInnerHTML={{ __html: content.html }} />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: ${rhythm(3)};

  @media screen and (max-width: 768px) {
    margin: 0 5px ${rhythm(3)};
  }
`

const Title = styled.div`
  font-size: ${rhythm(1)};
  display: flex;
  align-items: center;

  &::after {
    content: '';
    border-top: 1px solid;
    flex-grow: 1;
    margin-left: 5px;
  }

  @media screen and (max-width: 768px) {
    font-size: ${rhythm(0.8)};
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
  word-break: break-all;
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

  p {
    margin-bottom: 0;
  }

  li {
    margin-bottom: 0;

    ul {
      margin-top: 0;
    }
  }

  pre {
    overflow-y: scroll;
  }

  code {
    background-color: #d7efc1;
    font-size: 0.8rem;
    padding: 0 5px;
    border-radius: 3px;
  }

  blockquote {
    color: #9e9e9e;
    border-left: 6px solid #9e9e9e;
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`
