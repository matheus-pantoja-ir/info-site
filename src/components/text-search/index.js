import React from 'react'
import './styles.css'

const TextSearch = ({type, value, placeholder, onchange, handleClear}, rest) => {
	return (
		<div className="text_search-container">
			<input className="input"
				   type={type}
				   value={value}
				   placeholder={placeholder}
				   onChange={onchange}
				   {...rest} />

			{
				value &&
				<button className="clear_button" onClick={handleClear}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						style={{width: 16}}
						viewBox="0 0 512 512">
						<path style={{fill: '#000'}}
							  d="M256 512C114.84 512 0 397.16 0 256S114.84 0 256 0s256 114.84 256 256-114.84 256-256 256zm0-475.43C135.008 36.57 36.57 135.008 36.57 256S135.008 475.43 256 475.43 475.43 376.992 475.43 256 376.992 36.57 256 36.57zm0 0" />
						<path style={{fill: '#000'}}
							  d="M347.43 365.715c-4.68 0-9.36-1.785-12.93-5.36L151.645 177.5c-7.145-7.145-7.145-18.715 0-25.855 7.14-7.141 18.714-7.145 25.855 0L360.355 334.5c7.145 7.145 7.145 18.715 0 25.855a18.207 18.207 0 01-12.925 5.36zm0 0" />
						<path style={{fill: '#000'}}
							  d="M164.57 365.715c-4.68 0-9.355-1.785-12.925-5.36-7.145-7.14-7.145-18.714 0-25.855L334.5 151.645c7.145-7.145 18.715-7.145 25.855 0 7.141 7.14 7.145 18.714 0 25.855L177.5 360.355a18.216 18.216 0 01-12.93 5.36zm0 0" />
					</svg>
				</button>
			}
		</div>
	)
}

export default TextSearch