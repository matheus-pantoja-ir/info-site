import React, {useState, useEffect} from 'react'
import './App.css'

import ticket      from './images/ticket_clock.svg'
import information from './images/multiple_actions_information.svg'

import EventService from './service'
import EventCard    from './Components/event-card'

const App = () => {
	const [eventList, setEventList] = useState([])

	useEffect(() => {
		EventService.getEventList()
			.then(({data}) => {
				console.log(data.data)
				setEventList(data.data)
			})
	}, [])

	// id: "34538"
	// name: "Amigos – A história continua"
	// image: "https://site.ingressorapido.com.br/_services/site/ingressorapido/home/amigos-banner-site-copiar.png"
	// link: "https://www.ingressorapido.com.br/event/34358-1/d/71011"
	// local: "Estádio Municipal Parque do Sabiá"
	// city: "Uberlândia/MG"
	// date: "Segunda 29/06"
	// status: "Adiado"
	// description: "Aguarde contato da ingresso Rápido"

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
				<ul className="event_list">
					{
						eventList &&
						eventList.map(renderEventCard)
					}
				</ul>
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
		</>)
}

export default App