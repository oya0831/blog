import React from 'react'
//import { kebabCase } from 'lodash'
//import Helmet from 'react-helmet'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import PathLayout from '../../components/PathLayout'

import BlogRollContext from '../../contexts/BlogRollContext'

export default class CategoryPage extends React.Component {
  state = { path: "categories" }
  render() {
    return (
      <Layout state="category-roll">
        <section className="section">
          <div className="container">
            <PathLayout
              layoutInfo={{
                path: "path-layout",
                text: "全てのカテゴリ"
              }}
            />
            <div className="content">
              <div className="columns">
                <div className="column is-12">
                  <BlogRollContext.Provider value={ this.state }>
                    <BlogRoll />
                  </BlogRollContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
