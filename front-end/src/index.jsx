import React from 'react';
import {render} from 'react-dom';
import Cabecera from './Cabecera.jsx';
import Selector from './Selector.jsx';
import Panel from './Panel.jsx';

import '../node_modules/material-design-lite/dist/material';
import '../node_modules/material-design-lite/dist/material.cyan-light_blue.min.css';
import '../node_modules/mdl-selectfield/dist/mdl-selectfield';
import '../node_modules/mdl-selectfield/dist/mdl-selectfield.css';
import '../styles/custom.css';

const APLICATIVOS = [
	"CRS",
	"SSDD"
];

const MODULOS = [
	"ADEP20170204",
	"ART20161050"
];


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { tipo: "resumen", aplicativo: APLICATIVOS[0], modulo: MODULOS[0] };

		this.showPanel= this.showPanel.bind(this);
	}

	showPanel(tipo, aplicativo, modulo) {
		this.setState({ tipo: tipo, aplicativo: aplicativo, modulo: modulo });
	}

	componentWillMount() {
		fetch("http://localhost:8088/services/analysis").then(
			(response) => response.json()
		).then((data) => {
			console.log(data)
		})
	}

	render() {
		return (
			<div className="main-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<Cabecera/>
				<main className="mdl-layout__content mdl-color--grey-100">
					<div className="mdl-grid main-grid-content">
						<div className="left-panel mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
							<Selector aplicativos={APLICATIVOS} modulos={MODULOS} switcher={this.showPanel}/>
						</div>

						<Panel tipo={this.state.tipo} aplicativo={this.state.aplicativo} modulo={this.state.modulo}/>
					</div>
				</main>
			</div>
		);
	}
}

render(<App/>, document.getElementById('root'));
