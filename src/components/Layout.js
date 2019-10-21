import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"
import PreviewMainImage from './PreviewMainImage'
import { Link } from 'gatsby'

const TemplateWrapper = ({ children, state }) => {
  const { title, description } = useSiteMetadata()
  const image = state==="index" ? 'kinako.jpg' : 'kinako2.jpg'

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      <div className="main-image">
        <PreviewMainImage filename={image} />
        <Link to="/">
          <h1 className="main-text">はむっと！</h1>
        </Link>
        <Link to="/about">
          <h3 className="about-text">🐹このブログについて</h3>
        </Link>
        <Link to="/contact">
          <h3 className="contact-text">🐹お問い合わせ</h3>
        </Link>
      </div>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
