import React from 'react'

import Layout from '../../components/Layout'
import TagsList from '../../components/TagsList'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
 render(){
    return (
      <Layout state={"blog-roll"}>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns is-multiline">
                <div className="column is-10">
                  <BlogRoll
                    state={this.props.state===undefined? "blog" : this.props.state}
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
