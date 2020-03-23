import React, {useState, useEffect} from 'react'
import './App.css'

import {
	opsTicket,
	information,
	ticket
} from './images'

import EventService  from './service'
import EventCard     from './components/event-card'
import Loading       from './components/loading'
import TextSearch    from './components/text-search'
import AppFooter     from './components/app-footer'
import AppHeader     from './components/app-header'
import FlatList      from './components/flat-list'
import TicketMessage from './components/ticket-message'

const ReloadComponent = ({refetch}) => (
	<div className="reload-container">
		<img src={opsTicket} alt="" />
		<button className="reload" onClick={refetch}>Recarregar</button>
	</div>
)

const NotFoundComponent = () => (
	<TicketMessage>
		<span>
			Desculpe, não encontramos seu evento.
		</span>
	</TicketMessage>
)

const App = () => {
	const [eventList, setEventList] = useState([])
	const [loading, setLoading] = useState(true)
	const [hasError, setError] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [lastModified, setLastModified] = useState(undefined)

	useEffect(() => {
		fetchEventList()
	}, [])

	const fetchEventList = () => {
		EventService.getEventList()
			.then(({data}) => {
				setLastModified(data.last_modified)
				setEventList(data.data)
			})
			.catch(err => {
				setError(true)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const highlightText = (text, search) => (
		<>
			{
				text
					.split(new RegExp(`(${search})`, 'ig'))
					.map((word, index) => {
						return word.toUpperCase() === search.toUpperCase()
							   ? !!search.trim()
								 ? <mark key={index}>{word}</mark>
								 : word
							   : word
					})
			}
		</>
	)

	const renderEventCard = (event, index) => {
		return <EventCard key={index}
						  title={highlightText(event.name, searchValue)}
						  date={event.date}
						  locale={highlightText(event.local, searchValue)}
						  city={highlightText(event.city, searchValue)}
						  status={event.status}
						  info={event.description}
						  imageURL={event.image}
						  buyLink={event.link} />
	}

	const handleSearch = ({target}) => {
		setSearchValue(target.value)
	}

	const clearSearch = () => {
		setSearchValue('')
	}

	const filterEvent = ({name, city, local, status}) => {
		return (
			name.toUpperCase().includes(searchValue.toUpperCase()) ||
			city.toUpperCase().includes(searchValue.toUpperCase()) ||
			local.toUpperCase().includes(searchValue.toUpperCase()) ||
			status.toUpperCase().includes(searchValue.toUpperCase())
		)
	}

	const renderLastUpdate = (lastUpdate) => {
		if (!lastUpdate) return

		const dateLastUpdate = new Date(lastUpdate)

		const options = {
			day   : 'numeric',
			month : 'numeric',
			year  : 'numeric',
			hour  : 'numeric',
			minute: 'numeric'
		}
		return `Última atualização: ${new Intl.DateTimeFormat('pt-BR', options).format(dateLastUpdate)}`
	}

	return (
		<div className="app">

			<AppHeader />

			<main className="container">
				<div className="header">
					<div className="icon">
						<div className="halo">
							<img className="ticket" src={ticket} alt="" />
						</div>
					</div>

					<div className="info_text">
						<h1>Aviso</h1>
						<h2>A lista abaixo mostra todos os eventos que tiveram alterações recentes no cronograma devido as precauções do COVID-19 </h2>
					</div>

					<a className="more_link" href="#info">Saiba mais</a>

					<div className="text_search">
						<TextSearch value={searchValue}
									onchange={handleSearch}
									handleClear={clearSearch}
									placeholder="Nome do evento, cidade, lugar..." />
					</div>
				</div>

				{
					loading
					? <Loading />
					: <div className="main">
						<div className="list-header">
							<h3>Todos status</h3>
							<span className="last_modified">{renderLastUpdate(lastModified)}</span>
						</div>
						<FlatList
							data={eventList}
							filterFunction={filterEvent}
							renderFunction={renderEventCard}
							hasError={hasError}
							NotFoundComponent={NotFoundComponent}
							ErrorComponent={() => <ReloadComponent refetch={fetchEventList} />}
						/>
					</div>
				}

				<div className="footer">
					<div>
						<div className="halo">
							<img src={information} alt="" />
						</div>
					</div>
					<div className="information" id="info">
						Devido à natureza em rápida evolução dessa situação e ao volume de eventos afetados, estamos enfrentando atrasos nas atualizações de status de eventos. Tenha certeza de que nossa equipe está trabalhando com os produtores dos eventos para publicar as atualizações o mais rápido possível. Verifique esta página periodicamente para atualizações.
					</div>
				</div>
			</main>

			<AppFooter />
		</div>
	)
}

export default App