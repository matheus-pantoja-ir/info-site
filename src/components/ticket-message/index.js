import React       from 'react'
import './styles.css'
import {opsTicket} from '../../images'

const TicketMessage = ({children}) => (
	<div className="ticket_message container">
		<div className="image_container">
			<img src={opsTicket} alt="" />
		</div>
		{children}
	</div>
)

export default TicketMessage