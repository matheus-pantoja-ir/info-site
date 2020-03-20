import React from 'react'
import './styles.css'

const Loading = ({loading = true}) => (
	loading
	? <div className="lds-ring_container">
		<div className="lds-ring">
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
	: <></>
)

export default Loading