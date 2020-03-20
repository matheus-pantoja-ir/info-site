import React  from 'react'
import './styles.css'
import IrLogo from '../ir-logo'
import {
	iconApple,
	iconFacebook,
	iconGoogle,
	iconInstagram,
	iconLinkedin,
	iconTwitter
}             from '../../images'

const AppFooter = () => (
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
)


export default AppFooter