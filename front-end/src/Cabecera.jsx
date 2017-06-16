import React from 'react';

function Cabecera(props) {
	return (
		<header className="mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">

			<div className="mdl-layout__header-row">

				<span className="mdl-layout-title link-home">
					<a href="index.html">Inspector de código</a>
				</span>
				<img className="logo-inset" src="img/banchile.svg"/>
				<div className="mdl-layout-spacer"></div>
				<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">

					<label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
						<i className="material-icons">search</i>
					</label>

					<div className="mdl-textfield__expandable-holder">
						<input className="mdl-textfield__input" type="text" id="search"/>
						<label className="mdl-textfield__label" htmlFor="search">
							Introduzca una frase de búsqueda...
						</label>
					</div>
				</div>

				<button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
					<i className="material-icons">more_vert</i>
				</button>

				<ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
					<li className="mdl-menu__item">Acerca de...</li>
					<li className="mdl-menu__item">Configuración</li>
				</ul>
			</div>
		</header>
	);
}

export default Cabecera;
