import React from 'react';

function PanelResumen(props) {
	return (
		<div className="right-grid mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet mdl-grid mdl-grid--no-spacing">
			<div className="upper-right-panel mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
				<h4 className="panel-title">Resumen de {props.aplicativo} : {props.modulo}</h4>

				<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
					<tbody>
						<tr>
							<th className="mdl-data-table__cell--non-numeric">
								Líneas de código
							</th>
							<td className="mdl-data-table__cell--non-numeric">
								2194
							</td>
							<th className="mdl-data-table__cell--non-numeric">
								Defectos
							</th>
							<td className="mdl-data-table__cell--non-numeric">
								0
							</td>
						</tr>
						<tr>
							<th className="mdl-data-table__cell--non-numeric">
								Calidad
							</th>
							<td className="mdl-data-table__cell--non-numeric">
								100%
							</td>
							<th className="mdl-data-table__cell--non-numeric">
								Portabilidad
							</th>
							<td className="mdl-data-table__cell--non-numeric">
								100%
							</td>
						</tr>
					</tbody>
				</table>
				<p>
					<i className="material-icons mdl-list__item-icon">open_in_new</i>
					<a href="#">Abrir en Kiuwan</a>
				</p>
			</div>
		</div>
	);
}

export default PanelResumen;
