import React from 'react';

function PanelReportes(props) {
	return (
		<div className="right-grid mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet mdl-grid mdl-grid--no-spacing">
			<div className="upper-right-panel mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
				<h4 className="panel-title">Reportes</h4>

				<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
					<thead>
						<tr>
							<th className="mdl-data-table__cell--non-numeric">Reporte</th>
							<th className="mdl-data-table__cell--non-numeric"></th>
							<th className="mdl-data-table__cell--non-numeric">Fecha</th>
							<th className="mdl-data-table__cell--non-numeric">Calidad</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="mdl-data-table__cell--non-numeric">
								<i className="material-icons mdl-list__item-icon">open_in_new</i>
							</td>
							<td className="mdl-data-table__cell--non-numeric">
								<a href="img/ART20161050.pdf">ART20170303</a>
							</td>
							<td className="mdl-data-table__cell--non-numeric">
								03/03/2017
							</td>
							<td className="mdl-data-table__cell--non-numeric">
								100%
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default PanelReportes;
