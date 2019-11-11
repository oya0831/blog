import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'

const TagsList = ({ 
  data : {
    allMarkdownRemark: { group },
  }
}) => {
  console.log(group)
  return(
    <>
    {group.map(tag => (
      <div key={tag.fieldValue}>
        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
          {tag.fieldValue} ({tag.totalCount})
        </Link>
      </div>
    ))}
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query TagsListQuery {
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => <TagsList data={data} />}
  />
)
