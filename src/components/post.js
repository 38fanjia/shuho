import React from "react"
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { rhythm } from "../utils/typography"

export default (data) => {
  console.log(data)
  const post = data.content
  return (
    <React.Fragment>
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        {post.frontmatter.title}{" "}
        <span
          css={css`
            color: #bbb;
          `}
        >
          — {post.frontmatter.date}
        </span>
      </h3>
      <Text>{post.excerpt}</Text>
    </React.Fragment>
  )
}

const Text = styled.div`
  font-size: 0.8rem;
`
