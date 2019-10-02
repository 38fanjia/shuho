import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

interface Props {
  title: string
  url: string
  description: string
}

export default ({title, url, description}: Props) => {
  return (
    <Header>
      <a href={url}>
        <Title>
          {title}
        </Title>
      </a>
      <Description>{description}</Description>
      <HeaderImage src={'image/title.jpg'} />
    </Header>
  )
}

const Header = styled.header`
  text-align: center;
  padding-top: ${rhythm(1.5)};
`

const Title = styled.h1`
  margin-top: 0;
  display: inline-block;
`

const Description = styled.p`
  font-size: 0.7rem;
`

const HeaderImage = styled.img`
  max-width: 900px;
  width: 100%;
`
