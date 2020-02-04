import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link, graphql, StaticQuery } from 'gatsby';

const CategoriesList = ({ 
  data : {
    allMarkdownRemark: { group }
  }
}) => {
  return(
    <>
      <div className="has-text-centered soft-font category-list">カテゴリ</div>
      <hr />
      {group.map(category => (
        <div key={category.fieldValue}>
          <div className="rounded-font">
            <nobr>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`} className="category-title">
                {category.fieldValue}
              </Link>
            </nobr>
            <nobr className="category-total-count">
               &nbsp;({category.totalCount})
               <hr />
            </nobr>
          </div>
        </div>
      ))}
    </>
  )
}

CategoriesList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

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
