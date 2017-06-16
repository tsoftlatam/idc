import React from 'react';
import Dashboard from './Dashboard.jsx';
import Reportes from './Reportes.jsx';


function PanelGlobal(props) {
	return (
		<div className="right-grid mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet mdl-grid mdl-grid--no-spacing">
			<div className="upper-right-panel mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
				<Dashboard/>
			</div>

			<div className="panel-separator mdl-cell--1-col"></div>

			<div className="lower-right-panel mdl-card  mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
				<Reportes/>
			</div>
		</div>
	);
}


function PanelAplicativo(props) {
	return (
		<div className="right-grid mdl-cell mdl-cell--8-col mdl-cell--12-col-tablet mdl-grid mdl-grid--no-spacing">
			<div className="upper-right-panel mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
				<h4 className="panel-title">{props.nombre}</h4>
			</div>
		</div>
	);
}


function Panel(props) {
	switch(props.tipo) {
		case "global":	
			return <PanelGlobal/>;

		case "aplicativo":	
			return <PanelAplicativo nombre={props.aplicativo}/>;

		default:
			return <div/>
	}
}

export default Panel;
