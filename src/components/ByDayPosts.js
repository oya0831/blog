import React from 'react'
import { Link } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'
import TranslateDate from './TranslateDate'
import StateContext from '../contexts/state'


const ByDayPosts = ({
  posts,
  notImage
}) => ( 
  <StateContext.Consumer>
  { ({ day }) => { 
    const str = posts.map(value => {
      if(day===undefined || value.node.frontmatter.dayKey===day) {
        return value
      }
      else {
        return null
      }
    })
    const results=str.filter(str => str);

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
              </header>
              <p className="post-meta">
                <span className="date-text-layout is-size-6 is-block">
                  <TranslateDate date={result.frontmatter.date} />
                </span>
                <Link
                  className="blog-slug-text is-size-4"
                  to={result.fields.slug}
                >
                  {result.frontmatter.title}
                </Link>
              </p>
              <p>
                {result.excerpt}
                <br />
                <br />
                <Link className="button" to={result.fields.slug}>
                  続きを読む ≫
                </Link>
              </p>
            </article>
          </div>
        ))}
      </div>
    )
  }}
  </StateContext.Consumer>
)

export default ByDayPosts
