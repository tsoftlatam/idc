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
	"ADEP",
	"ART",
	"BCX",
	"COMEX",
	"CORE_FXC",
	"EBANKFRMW",
	"ELU",
	"EVALUADOR",
	"FABMIDDLE",
	"IDG",
	"INTERNETP",
	"MI_APPS",
	"MIPLATA_BACK",
	"MRX",
	"NVAINTEMP_SQL",
	"PLA_COMER_DB",
	"SCE",
	"SCMC",
	"SEFE",
	"SOFTTOKEN",
	"TERM_FINAN"
];


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { tipo: "global", aplicativo: "" };
		
		this.onShow = this.onShow.bind(this);
	}

	onShow(name) {
		if(name === "_GLOBAL_") {
			this.setState({ tipo: "global" });
		} else {
			this.setState({ tipo: "aplicativo", aplicativo: name });
		}
	}

	render() {
		return (
			<div className="main-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<Cabecera/>
				<main className="mdl-layout__content mdl-color--grey-100">
					<div className="mdl-grid main-grid-content">
						<div className="left-panel mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
							<Selector apps={APLICATIVOS} switcher={this.onShow}/>
						</div>

						<Panel tipo={this.state.tipo} aplicativo={this.state.aplicativo}/>
					</div>
				</main>
			</div>
		);
	}
}

render(<App/>, document.getElementById('root'));
