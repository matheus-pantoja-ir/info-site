import React from 'react'
import './styles.css'

const FlatList = ({data, renderFunction, filterFunction, hasError = false, ErrorComponent}) => {
	return (
		hasError
		? <ErrorComponent />
		: <ul className="event_list">
			{data.filter(filterFunction).map(renderFunction)}
		</ul>
	)
}

export default FlatList