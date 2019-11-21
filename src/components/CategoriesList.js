import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'

const CategoriesList = ({ 
  data : {
    allMarkdownRemark: { group },
  }
}) => {
  return(
    <>
      {group.map(category => (
        <div key={category.fieldValue}>
          <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
            {category.fieldValue} ({category.totalCount})
          </Link>
        </div>
      ))}
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query CategoriesListQuery {
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => <CategoriesList data={data} />}
  />
)
