import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
//import { Disqus } from 'gatsby-plugin-disqus'

import Layout from '../components/Layout'
import PathLayout from '../components/PathLayout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import TranslateDate from '../components/TranslateDate'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  categories,
  title,
  image,
  helmet,
  date,
  dayKey,
  dayText
}) => {
  const PostContent = contentComponent || Content;
  
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <PathLayout
          layoutInfo={{
            path: 'path-layout',
            text: title,
            dayKey: dayKey,
            dayText: dayText,
          }}
        />
        <div className="columns">
          <div className="column is-10 is-offset-1">

            <div className="rounded-font has-text-centered blog-title">
              {title}
            </div>
            <div className="rounded-font blog-date">
              <TranslateDate date={date}/>
            </div>
            <p className="rounded-font has-text-centered blog-description">{description}</p>
            {image ? (
              <div className="blog-main-image">
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: `blog main image`,
                }}
              />
              </div>
             ) : null}
            <PostContent className="rounded-font" content={content} />
            {categories && categories.length ? (
              <div style={{ marginTop: `4rem` }}>
                <div className="columns is-multiline">
                  {categories.map(category => (
                    <div key={category + `category`}>
                      <Link className="rounded-font btn blog-tags" to={`/category/${kebabCase(category)}/`}>{category}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const dayText = (() => {
    switch (post.frontmatter.dayKey) {
      case "ham": return "はむ日和";
      case "owner": return "飼い主日和";
      default : return "ネタ日和";
    }
  })();
  /*let disqusConfig = {
    url: location.href,
    identifier: post.frontmatter.id,
    title: post.frontmatter.title,
  }*/                
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        categories={post.frontmatter.category}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        date={post.frontmatter.date}
        dayKey={post.frontmatter.dayKey}
        dayText={dayText}
      />
      <section className="section">
        <div className="container">
          <div className="columns">
            {/*
            <div className="column is-10 is-offset-1">
              //コメント欄
              <Disqus config={disqusConfig} />
            </div>
            */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        dayKey
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
      }
    }
  }
`
