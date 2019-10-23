import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"
import { Link, StaticQuery, graphql } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TemplateWrapper extends React.Component {
  render() {
    const { data } = this.props
    const { title, description } = useSiteMetadata
    const image = this.props.state==="index" ? data.main : data.sub
    
  return (
    <div>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        {/*ファビコン画像を設定すること*/}
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      <div className="main-image">
        <PreviewCompatibleImage  imageInfo={{image: image, alt:"kinako"}}/>
        <Link to="/">
          <h1 className="main-text">はむっと！</h1>
        </Link>
        <Link to="/about">
          <h3 className="about-text">
            <span role="img" aria-label="ham">🐹</span>
            このブログについて
          </h3>
        </Link>
        <Link to="/contact">
          <h3 className="contact-text">
            <span role="img" aria-label="ham">🐹</span>
            お問い合わせ
          </h3>
        </Link>
        <Link to="/hamz">
          <div 
            style={{
              position: 'absolute',
              top: '60%',
              right: '10%',
              width: '50px',
              display: 'inline-block'
            }}
          >
            <PreviewCompatibleImage  imageInfo={{image: data.hamz, alt:"kinako"}}/>
          </div>
          <div className="hamz-text">はむちゃんず</div>
        </Link>
      </div>
      <Navbar />
      {this.props.children}
    </div>
  )
  }
}


export default ({ children, state }) => (
  <StaticQuery
    query={graphql`
      query {
        main:file(relativePath: {eq: "kinako.jpg"}) {
          childImageSharp{
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sub:file(relativePath: {eq: "kinako2.jpg"}) {
          childImageSharp{
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hamz:file(relativePath: {eq: "kinako3.JPG"}) {
          childImageSharp{
            fluid(maxWidth: 100, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <TemplateWrapper data={data} children={children} state={state} />}
  />
)
