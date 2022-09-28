import {
  connect
} from 'react-redux'

import Pagination from 'react-router-pagination'

import Component from './component'

export default connect(({ paginatedPage: { page, data, total } }) => ({ pageNumber: Pagination.calculatePageNumber(page, total), data }))(Component)
