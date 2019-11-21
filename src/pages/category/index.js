import React from 'react'
//import { kebabCase } from 'lodash'
//import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const CategoryPage = class extends React.Component {
  render(){
    const home = this.props.data.home
    return (
      <Layout state={"category-roll"}>
        <section className="section">
          <div className="container">
            <div className="link-layout">
              <div className="home-size">
                <PreviewCompatibleImage 
                  imageInfo={{image: home, alt:"kinako"}}
                />
              </div>
              <Link to="/">
                ホーム
              </Link>
                > 全てのカテゴリ
            </div>
            <div className="content">
              <div className="columns">
                <div className="column is-12">
                  <BlogRoll state="blog" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
      query {
        home:file(relativePath: {eq:"home5.png"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <CategoryPage data={data} />}
  />
)
