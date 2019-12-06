import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
//import { Disqus } from 'gatsby-plugin-disqus'

import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  categories,
  title,
  image,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {image ? (
              <Img fluid={image.childImageSharp.fluid} alt="" />
             ) : null}
            <PostContent content={content} />
            {categories && categories.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>タグ</h4>
                <ul className="taglist">
                  {categories.map(category => (
                    <li key={category + `category`}>
                      <Link to={`/category/${kebabCase(category)}/`}>{category}</Link>
                    </li>
                  ))}
                </ul>
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
  const { markdownRemark: post } = data
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
