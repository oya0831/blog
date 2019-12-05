import React from 'react'

import Layout from '../../components/Layout'
import CategoriesList from '../../components/CategoriesList'
import BlogRoll from '../../components/BlogRoll'
import PathLayout from '../../components/PathLayout'
import StateContext from '../../contexts/state'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <StateContext.Consumer>
      { ({ day }) => {
        const currentState = (function(day) {
          switch (day) {
            case "ham": return "はむ日和"
            case "owner": return "飼い主日和"
            case "story": return "ネタ日和"
            default: return "みんな日和"
          }
        })(day)
        return (
          <Layout state="blog-roll">
            <section className="section">
              <div className="container">
                <PathLayout
                  layoutInfo={{
                    path: "path-layout",
                    text: `${currentState}`
                  }}
                />
                <div className="content">
                  <div className="columns is-multiline">
                    <div className="column is-10">
                      <BlogRoll />
                    </div>
                    <div className="column is-2">
                      <CategoriesList />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        )
      }}
      </StateContext.Consumer>
    )
  }
}
