import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
 render(){
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll
                state={this.props.state===undefined? "blog" : this.props.state}
              />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
