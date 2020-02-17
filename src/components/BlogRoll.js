import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

import NewPosts from './NewPosts';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import TranslateDate from './TranslateDate';

import PathContext from '../contexts/PathContext';
import BlogRollContext from '../contexts/BlogRollContext';
import DecorationDayText from '../img/header/hover.png';

export const BlogRoll = ({ data, notImage }) => (
  <PathContext.Consumer>
  { ({ path }) => (
    <BlogRollContext.Consumer>
    { ({ categoriesPosts }) => { 
      const { edges: posts } = data.allMarkdownRemark;
      const results = (function(path) {
        if (path === 'index') {
          return NewPosts({ posts });
        }
        else if (path === 'category') {
          return categoriesPosts;
        }
        else {
          const str = posts.map(value => {
            /* '' is all , path is 'ham' or 'owner' or 'story' */
            if (path === '' || path === 'categories' || value.node.frontmatter.dayKey === path) {
              return value;
            }
            else {
              return null;
            }
          });
          //removed undefined
          return str.filter(str => str);
        }
      })(path);

      /*const dayText = posts.map(value => {
        switch (value.node.frontmatter.dayKey) {
          case 'ham': return 'はむ日和';
          case 'owner': return '飼い主日和';
          default: return 'ネタ日和';
        }
      });*/


      return (
        <div className="columns is-multiline">
          { results && results.map(({ node: result }) => (
            <div className="is-parent column is-6" key={result.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  result.frontmatter.featuredimage ? 'is-featured' : ''
                }`}
              >
                <header>
                  { result.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: result.frontmatter.featuredimage,
                            alt: `featured image thumbnail for result ${
                              result.frontmatter.title
                            }`,
                          }}
                        />
                      </div>
                    ) : (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: notImage,
                            alt: "featured image thumbnail for result not_image"
                          }}
                        />
                      </div> 
                    )
                  }
                <p className="post-meta">
                  <span className="rounded-font date-text-layout is-block">
                    <TranslateDate date={result.frontmatter.date} />
                  </span>
                  <Link
                    className="soft-font blog-slug-text"
                    to={result.fields.slug}
                  >
                    {result.frontmatter.title}
                  </Link>
                </p>
                </header>
                <div className="rounded-font excerpt-text">{result.excerpt}</div>
                <Link className="soft-font btn continue-btn-text" to={result.fields.slug}>
                  続きを読む ≫
                </Link>
                <div className={`day-decoration ${result.frontmatter.dayKey==='owner' ? 'owner-decoration' : 'other-decoration'}`} >
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: DecorationDayText,
                      alt: 'decoration image',
                    }}
                  />
                </div>
                <div className="soft-font blog-day-text has-text-centered">
                  {
                    result.frontmatter.dayKey==='ham' ? 'はむ日和' : 
                    result.frontmatter.dayKey==='owner' ? '飼い主日和' :
                    result.frontmatter.dayKey==='story' ? 'ネタ日和' : null
                  }
                </div>
              </article>
            </div>
          ))}
        </div>
      )
    }}
    </BlogRollContext.Consumer>
  )}
  </PathContext.Consumer>
)

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  notImage: PropTypes.object 
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(truncate: true, pruneLength: 80)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                dayKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                category
              }
            }
          }
        }
        not_image:file(relativePath: {eq: "not-image.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <BlogRoll notImage={data.not_image} data={data} />}
  />
)
