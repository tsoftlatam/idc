import React from 'react';

class PanelResumen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			aplicativo: "",
			modulo: "",
			fecha: null,
			resultado: null,
			loc: null,
			defectos: null,
			calidad: null,
			portabilidad: null
		};
	}

	componentWillReceiveProps(props) {
		fetch(props.url).then(
			(response) => response.json()
		).then((data) => {
			this.setState({
				aplicativo: props.aplicativo,
				modulo: props.modulo,
				fecha: new Date(data.execdate),
				resultado: data.result,
				loc: Math.round(Math.random() * 10000),
				defectos: Math.round(Math.random() * 10),
				calidad: Math.round(Math.random() * 100),
				portabilidad: Math.round(Math.random() * 100)
			});
		});
	}

	render() {
		let url;
		if(this.state.aplicativo.length > 0) {
			url = <a href="#">Abrir en Kiuwan</a>;
		} else {
			url = <span/>;
		}

		return (
			<div className="right-grid mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet mdl-grid mdl-grid--no-spacing">
				<div className="upper-right-panel mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
					<h4 className="panel-title">{ this.state.aplicativo.length > 0 ? "Resumen de " : "" }{this.state.aplicativo} : {this.state.modulo}</h4>

					<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
						<tbody>
							<tr>
								<th className="mdl-data-table__cell--non-numeric">
									Fecha
								</th>
								<td className="mdl-data-table__cell--non-numeric">
									{this.state.fecha ? this.state.fecha.toLocaleDateString() : null}
								</td>
								<th className="mdl-data-table__cell--non-numeric">
									Resultado
								</th>
								<td className="mdl-data-table__cell--non-numeric">
									{this.state.resultado}
								</td>
							</tr>
							<tr>
								<th className="mdl-data-table__cell--non-numeric">
									Líneas de código
								</th>
								<td className="mdl-data-table__cell--non-numeric">
									{this.state.loc}
								</td>
								<th className="mdl-data-table__cell--non-numeric">
									Defectos
								</th>
								<td className="mdl-data-table__cell--non-numeric">
									{this.state.defectos}
								</td>
							</tr>
							<tr>
								<th className="mdl-data-table__cell--non-numeric">
									Calidad
								</th>
								<td className="mdl-data-table__cell--non-numeric">
									{this.state.calidad}%
								</td>
								<th className="mdl-data-table__cell--non-numeric">
									Portabilidad
								</th>
								<td className="mdl-data-table__cell--non-numeric">
									{this.state.portabilidad}%
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						<i className="material-icons mdl-list__item-icon">open_in_new</i>
						{url}
					</p>
				</div>
			</div>
		);
	}
}

export default PanelResumen;