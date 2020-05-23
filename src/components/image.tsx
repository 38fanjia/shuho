import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  className?: string
  filename: string
  alt: string
}
export default ({className, filename, alt}: Props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      if (!image) return

      const imageSizes = image.node.childImageSharp.sizes
      return <Img className={className}　sizes={imageSizes} alt={alt}/>
    }}
  />
)
