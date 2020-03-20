import React  from 'react'
import IrLogo from '../ir-logo'
import './styles.css'

const AppHeader = () => (
	<header className="ir-header">
		<div className="container">
			<div className="logo_container">
				<a href="https://www.ingressorapido.com.br/">
					<IrLogo />
				</a>
			</div>
		</div>
	</header>
)

export default AppHeader