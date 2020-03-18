import React, {useState, useEffect} from 'react'
import './App.css'

import {
	iconGoogle,
	iconApple,
	iconTwitter,
	iconLinkedin,
	iconInstagram,
	iconFacebook,
	opsTicket,
	information,
	ticket
}             from './images'
import IrLogo from './components/ir-logo'

import EventService from './service'
import EventCard    from './components/event-card'

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
						  locale={event.local}
						  city={event.city}
						  status={event.status}
						  info={event.description}
						  imageURL={event.image}
						  buyLink={event.link} />
	}

	return (
		<div className="app">
			<header className="ir-header">
				<div className="container">
					<div className="logo_container">
						<a href="https://www.ingressorapido.com.br/">
							<IrLogo />
						</a>
					</div>
				</div>
			</header>
			<main className="container">
				<div className="header">
					<div>
						<div className="halo">
							<img className="ticket" src={ticket} alt="" />
						</div>
					</div>
					<div className="info_text">
						<h1>Aviso</h1>
						<h2>A lista abaixo mostra todos os eventos que tiveram alterações recentes no cronograma devido as precauções do COVID-19 </h2>
					</div>
				</div>
				<div className="main">
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
				</div>
				<div className="footer">
					<div>
						<div className="halo">
							<img src={information} alt="" />
						</div>
					</div>
					<div className="information">
						Devido à natureza em rápida evolução dessa situação e ao volume de eventos afetados, estamos enfrentando atrasos nas atualizações de status de eventos. Tenha certeza de que nossa equipe está trabalhando com os produtores dos eventos para publicar as atualizações o mais rápido possível. Verifique esta página periodicamente para atualizações.
					</div>
				</div>
			</main>
			<footer className="main_footer">
				<div className="container">
					<div className="content">
						<div className="logo_container">
							<a href="https://www.ingressorapido.com.br/">
								<IrLogo primary="#ffffff" secondary="#ffffff" />
							</a>
						</div>
						<div>
							INSTITUCIONAL
							<ul>
								<li><a href="https://www.ingressorapido.com.br/about">Sobre a Ingresso Rápido</a></li>
								<li><a href="https://sac.ingressorapido.com.br/">Fale Conosco</a></li>
								<li><a href="https://site.ingressorapido.com.br/newsletter/">Assine Nossa News</a></li>
								<li><a href="https://careers.ingressorapido.com.br/">Carreiras</a></li>
								<li><a href="https://www.ingressorapido.com.br/sales-point">Pontos de Venda</a></li>
							</ul>
						</div>
						<div>
							POLÍTICAS
							<ul>
								<li><a href="https://www.ingressorapido.com.br/policies">Políticas de Vendas</a></li>
								<li><a href="https://www.ingressorapido.com.br/privacy">Políticas de Privacidade</a>
								</li>
								<li><a
									href="https://site.ingressorapido.com.br/meiaentrada/">Políticas de Meia Entrada</a>
								</li>
							</ul>
						</div>
						<div>
							CLIENTES
							<ul>
								<li>
									<a href="https://www.ingressorapido.com.br/commercial">Seja Nosso Parceiro</a>
								</li>
							</ul>
						</div>
						<div className="app_market-container">
							COMPRE PELO APP
							<ul className="horizontal_list app_market">
								<li>
									<a href="https://itunes.apple.com/br/app/ingresso-rapido/id1000809331?l=pt&referrer=utm_source%3Dingressorapido%26utm_medium%3DBanner%2520Web%26utm_campaign%3DiOS%2520Footer%2520Web">
										<img src={iconApple} alt="" />
									</a>
								</li>
								<li>
									<a href="https://play.google.com/store/apps/details?id=com.ir.ticket&referrer=utm_source%3Dingressorapido%26utm_medium%3DBanner%2520Web%26utm_campaign%3DAndroid%2520Footer%2520Web">
										<img src={iconGoogle} alt="" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<hr />
					<div className="legal_content">
						<div className="corp">
							© 2019 Ingresso Rápido. Todos os direitos reservados.
							<ul className="horizontal_list social_list">
								<li>
									<a href="https://www.facebook.com/IngressoRapido/">
										<img src={iconFacebook} alt="facebook" />
									</a>
								</li>
								<li>
									<a href="https://twitter.com/ingressorapido">
										<img src={iconTwitter} alt="twitter" />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/ingressorapidooficial/">
										<img src={iconInstagram} alt="instagram" />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/company/1374083/">
										<img src={iconLinkedin} alt="linkedin" />
									</a>
								</li>
							</ul>
						</div>

						<div>
							Empresa Brasileira de Comercialização de Ingressos – Alameda Tocantins, 350 - 1° andar conj. 101 Alphaville, Barueri - São Paulo, CEP: 06455-020 – CNPJ 15.150.423/0001-65
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App