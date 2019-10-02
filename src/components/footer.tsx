import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

interface Props {
  author: string
}

export default (props: Props) => {
  return (
    <Footer>
      <p>© 2019 {props.author}</p>
    </Footer>
  )
}

const Footer = styled.footer`
  padding: ${rhythm(1)} 0 ${rhythm(0.5)};
  text-align: center;
  border-top: 1px solid;

  & > p {
    margin: 0;
    font-size: 0.8em;
  }

  @media screen and (max-width: 768px){
    background-color: #646464;
    color: #fff;
  }
`
