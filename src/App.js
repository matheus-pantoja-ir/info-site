import React, {useState, useEffect} from 'react'
import './App.css'

import ticket      from './images/ticket_clock.svg'
import information from './images/multiple_actions_information.svg'
import opsTicket   from './images/noorders.png'

import EventService from './service'
import EventCard    from './Components/event-card'

const App = () => {
	const [eventList, setEventList] = useState([])
	const [loading, setLoading] = useState(true)
	const [hasError, setError] = useState(false)

	useEffect(() => {
		fetchEventList()
	}, [])

	const fetchEventList = () => {
		EventService.getEventList()
			.then(({data}) => {
				setEventList(data.data)
			})
			.catch(err => {
				setError(true)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const renderEventCard = (event, index) => {
		return <EventCard key={index}
						  title={event.name}
						  date={event.date}
						  locale={`${event.city} - ${event.local}`}
						  status={event.status}
						  info={event.description}
						  imageURL={event.image}
						  buyLink={event.link} />
	}

	return (
		<>
			<header>
				<div>
					<div className="halo">
						<img className="ticket" src={ticket} alt="" />
					</div>
				</div>
				<div className="info_text">
					<h1>Aviso</h1>
					<h2>A lista abaixo mostra todos os eventos que tiveram alterações recentes no cronograma devido as precauções do COVID-19 </h2>
				</div>
			</header>
			<main>
				<h3>Todos status</h3>
				{
					hasError
					? <div className="reload-container">
						<img src={opsTicket} alt="" />
						<button className="reload" onClick={fetchEventList}>Recarregar</button>
					</div>
					: <ul className="event_list">
						{
							eventList &&
							eventList.map(renderEventCard)
						}
					</ul>
				}
			</main>
			<footer>
				<div>
					<div className="halo">
						<img src={information} alt="" />
					</div>
				</div>
				<div className="information">
					Devido à natureza em rápida evolução dessa situação e ao volume de eventos afetados, estamos enfrentando atrasos nas atualizações de status de eventos. Tenha certeza de que nossa equipe está trabalhando diligentemente com os proprietários do evento para publicar as atualizações o mais rápido possível.
					Verifique esta página periodicamente para atualizações ou obtenha mais informações sobre o cancelamento e reprogramação de eventos ao vivo.
				</div>
			</footer>
		</>
	)
}

export default App