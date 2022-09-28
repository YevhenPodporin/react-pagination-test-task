import {
  connect
} from 'react-redux'

import {
  withRouter
} from 'react-router'

import Pagination from 'react-router-pagination'

import { requestPage } from 'react-router-pagination-io/client/app/actions/paginated-page'

import {
  SPREAD
} from 'react-router-pagination-io/client/app/constants'

import Component from './component'

const mapStateToProps = ({ paginatedPage: { page, total } }, { match }) => {
  const totalPages = total || 12
  return {
    totalPages,
    pageNumber: Pagination.calculatePageNumber(page, totalPages),
    spread: SPREAD,
    match
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (pageNumber) => dispatch(requestPage(pageNumber))
})

const mergeProps = (props, dispatch) => ({
  ...props,
  ...dispatch
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component))
