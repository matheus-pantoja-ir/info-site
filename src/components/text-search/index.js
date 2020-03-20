import React from 'react'

const TextSearch = ({type, value, placeholder}, rest) => {
	return (
		<div>
			<input type={type} value={value} placeholder={placeholder} {...rest} />
		</div>
	)
}

export default TextSearch