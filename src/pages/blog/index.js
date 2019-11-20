import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby' 
import Img from 'gatsby-image'

import Layout from '../../components/Layout'
import TagsList from '../../components/TagsList'
import BlogRoll from '../../components/BlogRoll'

const BlogIndexPage = class extends React.Component {
 render(){
    const state = this.props.state
    const home = this.props.data.home
    const currentState = (function(state) {
      switch (state) {
        case "ham": return "はむ日和"
        case "owner": return "飼い主日和"
        case "story": return "ネタ日和"
        default: return "みんな日和"
      }
    })(state)
    return (
      <Layout state={"blog-roll"}>
        <section className="section">
          <div className="container">
            <div className="link-layout">
              <Img
                style={{width:'20px'}}
                fluid={home.childImageSharp.fluid}
              />
              <Link to="/">
                ホーム
              </Link>
               > {currentState}
              
            </div>
            <div className="content">
              <div className="columns is-multiline">
                <div className="column is-10">
                  <BlogRoll
                    state={state===undefined? "blog" : state}
                  />
                </div>
                <div className="column is-2">
                  <TagsList />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ({ state }) => (
  <StaticQuery
    query={graphql`
      query {
        home:file(relativePath: {eq: "home5.png"}) {
          childImageSharp{
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <BlogIndexPage data={data} state={state} />}
  />
)
