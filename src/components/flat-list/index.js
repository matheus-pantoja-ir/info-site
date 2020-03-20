import React from 'react'
import './styles.css'

const FlatList = ({data, renderFunction, hasError = false, ErrorComponent}) => {
	return (
		hasError
		? <ErrorComponent />
		: <ul className="event_list">
			{data.map(renderFunction)}
		</ul>
	)
}

export default FlatList