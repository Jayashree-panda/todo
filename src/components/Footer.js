import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const footerr = {
  marginLeft:'770px'
  
}
const Footer = () => (
  <div>
    <span style={footerr}>
      <FilterLink filter={VisibilityFilters.SHOW_ALL} >
        All
      </FilterLink>
    </span>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} style={footerr}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} style={footerr}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
