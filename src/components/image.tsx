import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  className?: string
  filename: string
  alt: string
}
export default ({ className, filename, alt }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename)
      })

      if (!image) return

      return <Img className={className} fluid={image.node.childImageSharp.fluid} alt={alt} />
    }}
  />
)
