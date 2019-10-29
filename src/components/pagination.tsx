import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

interface Props {
  currentPage: number
  numPages: number
}

export default ({currentPage, numPages}: Props) => {
  const pageList: any = Array.from({ length: numPages })
  const isFirst: boolean = currentPage === 1
  const isLast: boolean = numPages === currentPage

  return (
    <Wrapper>
      <List disabled={isFirst}>
        <StyledLink href="/shuho/">&lt;</StyledLink>
      </List>
      {pageList.map((_, i: number) => (
        <List key={i} current={currentPage === i + 1}>
          <StyledLink href={i === 0 ? '/shuho/' : `/shuho/page/${i+1}`}>{i + 1}</StyledLink>
        </List>
      ))}
      <List disabled={isLast}>
        <StyledLink href={`/shuho/page/${numPages}`}>&gt;</StyledLink>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 0 ${rhythm(3)};
  list-style: none;
`

const StyledLink = styled.a``

interface ListProps {
  disabled?: boolean
  current?: boolean
}
const List = styled.li<ListProps>`
  margin: 0;
  margin-right: 5px;
  &:last-child {
    margin: 0;
  }
  ${StyledLink} {
    width: 30px;
    height: 30px;
    color: #00aa8c;
    border-radius: 15px;
    display: inline-block;
    text-align: center;
    &:hover {
      box-shadow: none;
      background-color: #91ceb8;
      color: white;
    }
    ${props => props.current && css`
      background-color: #00aa8c;
      color: white;
    `}
    ${props => props.disabled && css`
      color: #91ceb8;
    `}
    ${props => (props.current || props.disabled) && css`
      pointer-events: none;
    `}
  }
`
