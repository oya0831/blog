import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from "gatsby"
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import './all.sass'

export default class TemplateWrapper extends React.Component {
  render() {
    const { title, description } = useSiteMetadata
    return (
      <div>
        <Helmet>
          <html lang="ja" />
          <title>{title}</title>
          <meta name="description" content={description} />

          {/*ファビコン画像をあとで設定すること
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          */}

          <meta name="theme-color" content="#fff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
        </Helmet>
        <Navbar state={this.props.state}/>
        {this.props.children}
      </div>
    )
  }
}
