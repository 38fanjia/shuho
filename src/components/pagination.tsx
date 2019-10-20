import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

export default ({currentPage, numPages}) => {
  const pageList: any = Array.from({ length: numPages })
  const isFirst: boolean = currentPage === 1
  const isLast: boolean = numPages === currentPage

  return (
    <Wrapper>
      <Page disabled={isFirst} href="/">&lt;</Page>
      {pageList.map((_, i) => (
        <Page key={i} current={currentPage === i + 1} href={i === 0 ? '/' : `/page/${i+1}`}>{i + 1}</Page>
      ))}
      <Page disabled={isLast} href={`/page/${numPages}`}>&gt;</Page>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${rhythm(3)};
`

interface PageProps {
  current?: boolean
  disabled?: boolean
}
const Page = styled.a<PageProps>`
  width: 30px;
  height: 30px;
  color: #00aa8c;
  text-align: center;
  margin-right: 5px;
  border-radius: 15px;
  &:last-child {
    margin: 0;
  }
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
`
