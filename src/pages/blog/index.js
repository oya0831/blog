import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export class BlogIndexPage extends React.Component {
  render(){
    console.log(this.props.state)
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll
                state={this.props.state}
              />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ({ location }) => {
  if (location.state) {
    return ( 
      <BlogIndexPage state={location.state.path} />
    )
  } else {
    return (
      <BlogIndexPage state={null} />
    )
  }
}
