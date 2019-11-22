import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'

const PathLayout = ({
  homeImage,
  path,
  text
}) => {
  return(
    <div className={path}>
      <div className="home-size">
        <PreviewCompatibleImage
          imageInfo={{
            image: homeImage,
            alt: "home image"
          }}
        />
      </div>
      <Link to="/">
        ホーム
      </Link>
      > {text}
    </div>
  )
}

export default ({ layoutInfo }) => (
  <StaticQuery
    query={graphql`
      query {
        home:file(relativePath: {eq: "home5.png"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => {
      const { path, text } = layoutInfo
      
      return <PathLayout homeImage={data.home} path={path} text={text} />
    }}
  />
)
