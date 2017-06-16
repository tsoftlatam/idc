import React from 'react';

function Reportes(props) {
	return (
		<div>
			<h4 className="panel-title">Reportes</h4>

			<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
				<tbody>

					<tr>
						<td className="mdl-data-table__cell--non-numeric">
							<i className="material-icons mdl-list__item-icon">open_in_new</i>
						</td>
						<td className="mdl-data-table__cell--non-numeric">
							<a href="img/ART20161050.pdf">ART20170303</a>
						</td>
						<td className="mdl-data-table__cell--non-numeric">
							Reporte consolidado de aplicativos 03/03/2017
						</td>
					</tr>

					<tr>
						<td className="mdl-data-table__cell--non-numeric">
							<i className="material-icons mdl-list__item-icon">open_in_new</i>
						</td>
						<td className="mdl-data-table__cell--non-numeric">
							<a href="img/ART20161050.pdf">ART20161050</a>
						</td>
						<td className="mdl-data-table__cell--non-numeric">
							Reporte consolidado de aplicativos 01/10/2016
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Reportes;
