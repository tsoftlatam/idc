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

let aplicativos = {};

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tipo: "resumen",
			aplicativo: props.aplicativo,
			modulo: props.modulo,
			url: props.url
		};

		this.showPanel= this.showPanel.bind(this);
	}

	showPanel(tipo, aplicativo, modulo, url) {
		this.setState({ tipo: tipo, aplicativo: aplicativo, modulo: modulo, url: url });
	}

	render() {
		return (
			<div className="main-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<Cabecera/>
				<main className="mdl-layout__content mdl-color--grey-100">
					<div className="mdl-grid main-grid-content">
						<div className="left-panel mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
							<Selector aplicativos={aplicativos} aplicativo={this.state.aplicativo} modulo={this.state.modulo} url={this.state.url} switcher={this.showPanel}/>
						</div>

						<Panel tipo={this.state.tipo} aplicativo={this.state.aplicativo} modulo={this.state.modulo} url={this.state.url}/>
					</div>
				</main>
			</div>
		);
	}
}


fetch("http://localhost:8088/services/analysis").then(
	(response) => response.json()
).then((data) => {
	let analysis = data._embedded.analysis;

	for(let i = 0; i < analysis.length; ++i) {
		let a = analysis[i].application;
		let m = analysis[i].module;
		let url = analysis[i]._links.analysis.href;

		if(aplicativos[a]) {
			aplicativos[a].push({ module: m, url: url })
		} else {
			aplicativos[a] = [{ module: m, url: url }];
		}
	}

	let a = Object.keys(aplicativos)[0];
	let m = aplicativos[a][0].module; 
	let url = aplicativos[a][0].url; 

	render(<App aplicativo={a} modulo={m} url={url}/>, document.getElementById('root'));
})
