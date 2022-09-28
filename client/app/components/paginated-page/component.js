/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { requestPage } from 'react-router-pagination-io/client/app/actions/paginated-page'

import {
  Link, useLocation
} from 'react-router-dom'

import Pagination from 'react-router-pagination-io/client/app/components/common/pagination'
import { useDispatch } from 'react-redux'

const PaginatedPage = ({ pageNumber, data }) => {
  const dispatch = useDispatch()
  const [dataToRender, setDataToRender] = useState([])
  const url = useLocation()
  const currentpageNumber = parseInt(url.pathname.match(/\d+/)) || 1

  useEffect(() => {
    dispatch(requestPage(currentpageNumber))
  }, [currentpageNumber])

  useEffect(() => {
    if (data) {
      setDataToRender(data)
    }
  }, [data])

  return (
		<section >
			<h1>Pagination (Page {pageNumber})</h1>
			<Pagination />
			<nav>
				<p>Return to the <Link to='/'>index page</Link>.</p>
				{do {
				  if (pageNumber) {
					<p>Redux has state for page {pageNumber}.</p>
				  }
				}}
			</nav>
			<div className='cards__container'>
				{dataToRender.map((value) => {
				  const { name, status, image, id } = value
				  return (
						<div key={id} className='card__container'>
							<div className="card__image"><img src={image}></img></div>
							<div className="card__name">Name: {name}</div>
							<div className="card__status">Status: {status}</div>
						</div>
				  )
				})}
			</div>
		</section>
  )
}

PaginatedPage.propTypes = {
  pageNumber: PropTypes.number.isRequired
}

export default PaginatedPage
