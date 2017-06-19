import React from 'react';

class Selector extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			aplicativos: props.aplicativos,
			modulos: props.modulos,
			switcher: props.switcher,
			a: props.aplicativos[0],
			m: props.modulos[0]
		};

		this.handleChangeAplicativo = this.handleChangeAplicativo.bind(this);
		this.handleChangeModulo = this.handleChangeModulo.bind(this);
		this.onResumen = this.onResumen.bind(this);
		this.onReportes = this.onReportes.bind(this);
	}

	handleChangeAplicativo(event) {
		this.setState({ a: event.target.value });
	}

	handleChangeModulo(event) {
		this.setState({ m: event.target.value });
	}

	onResumen() {
		this.state.switcher("resumen", this.state.a, this.state.m);
	}

	onReportes() {
		this.state.switcher("reportes");
	}

	render() {
		let apps = [];
		let mods = [];

		for(let i = 0; i < this.state.aplicativos.length; ++i) {
			apps.push(<option value={this.state.aplicativos[i]}>{this.state.aplicativos[i]}</option>);
		}

		for(let i = 0; i < this.state.modulos.length; ++i) {
			mods.push(<option value={this.state.modulos[i]}>{this.state.modulos[i]}</option>);
		}

		return (
			<div>
				<div className="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
					<select className="mdl-selectfield__select" id="selector-aplicativo" name="selector-aplicativo" value={this.state.a} onChange={this.handleChangeAplicativo}>
						{apps}
					</select>
					<div className="mdl-selectfield__icon"><i className="material-icons">arrow_drop_down</i></div>
					<label className="mdl-selectfield__label" htmlFor="selector-aplicativo">Aplicativo:</label>
				</div>

				<div className="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
					<select className="mdl-selectfield__select" id="selector-modulo" name="selector-modulo" value={this.state.m} onChange={this.handleChangeModulo}>
						{mods}
					</select>
					<div className="mdl-selectfield__icon"><i className="material-icons">arrow_drop_down</i></div>
					<label className="mdl-selectfield__label" htmlFor="selector-modulo">Módulo:</label>
				</div>

				<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.onResumen}>
					Resumen &#x25ba;
				</button>

				<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.onReportes}>
					Reportes &#x25ba;
				</button>
			</div>
		);
	}
}

export default Selector;
