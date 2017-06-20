import React from 'react';

class Selector extends React.Component {

	constructor(props) {
		super(props);

		this.state = { a: props.aplicativo, m: props.modulo, url: props.url };

		this.handleChangeAplicativo = this.handleChangeAplicativo.bind(this);
		this.handleChangeModulo = this.handleChangeModulo.bind(this);
		this.onResumen = this.onResumen.bind(this);
		this.onReportes = this.onReportes.bind(this);
	}

	handleChangeAplicativo(event) {
		let a = event.target.value;
		this.setState({
			a: a,
			m: this.props.aplicativos[a][0].module,
			url: this.props.aplicativos[a][0].url
		});
	}

	handleChangeModulo(event) {
		let m = event.target.value;
		let url = "";
		for(let i = 0; i < this.props.aplicativos[this.state.a].length; ++i) {
			let murl = this.props.aplicativos[this.state.a][i];
			if(murl.module === m) {
				url = murl.url;
			}
		}
		this.setState({ m: m, url: url });
	}

	onResumen() {
		this.props.switcher("resumen", this.state.a, this.state.m, this.state.url);
	}

	onReportes() {
		this.props.switcher("reportes");
	}

	render() {
		let opcionesAplicativos = [];
		let opcionesModulos = [];

		for(let a in this.props.aplicativos) {
			opcionesAplicativos.push(<option value={a}>{a}</option>);
		}
		for(let i = 0; i < this.props.aplicativos[this.state.a].length; ++i) {
			let m = this.props.aplicativos[this.state.a][i].module;
			opcionesModulos.push(<option value={m}>{m}</option>);
		}

		return (
			<div>
				<p className="select-label">Aplicativo</p>
				<div className="mdl-selectfield mdl-js-selectfield">
					<select className="mdl-selectfield__select" id="selector-aplicativo" name="selector-aplicativo" value={this.state.a} onChange={this.handleChangeAplicativo}>
						{opcionesAplicativos}
					</select>
					<div className="mdl-selectfield__icon"><i className="material-icons">arrow_drop_down</i></div>
				</div>

				<p className="select-label">Módulo</p>
				<div className="mdl-selectfield mdl-js-selectfield">
					<select className="mdl-selectfield__select" id="selector-modulo" name="selector-modulo" value={this.state.m} onChange={this.handleChangeModulo}>
						{opcionesModulos}
					</select>
					<div className="mdl-selectfield__icon"><i className="material-icons">arrow_drop_down</i></div>
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
