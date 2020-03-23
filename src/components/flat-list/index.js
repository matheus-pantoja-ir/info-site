import React, {useState} from 'react'
import './styles.css'

const emptyComponent = () => <></>

const FlatList = ({
					  data,
					  renderFunction,
					  filterFunction = () => true,
					  hasError = false,
					  ErrorComponent = emptyComponent,
					  NotFoundComponent = emptyComponent
				  }) => {

	const handleEmpty = (data) => {
		if (data.length) {
			return (
				<ul className="event_list">
					{data}
				</ul>
			)
		}
		return <NotFoundComponent/>
	}

	return (
		<>
			{
				hasError
				? <ErrorComponent />
				: ((handleEmpty)
					(data
						.filter(filterFunction)
						.map(renderFunction)))
			}
		</>
	)
}

export default FlatList