import React from 'react'
import './styles.css'

const EventCard = ({title, date, locale, status, info, imageURL, buyLink}) => {

	const statusEnum = {
		'Adiado'   : 'yellow',
		'Cancelado': 'red',
		'Nova data': 'green'
	}

	return (
		<li className="event_card-container">
			<div className="event_info">
				<div className="image_container">
					{
						imageURL
						? <img className="image" src={imageURL} alt="" />
						: <div className="placeholder" />
					}
				</div>
				<div className="content">
					<div className="header">
						<span className="title">{title}</span>
						{
							buyLink &&
							<a className="link" href={buyLink}>COMPRAR</a>
						}
					</div>
					<span>{date}</span>
					<span>{locale}</span>
				</div>

			</div>
			<div className="event_situation">
				<div className={`status ${statusEnum[status]}`}>
					<span>{status}</span>
				</div>
				<div className="info">
					<span>{info}</span>
				</div>
			</div>
		</li>
	)
}

export default EventCard