import React from 'react';
import PanelResumen from './PanelResumen.jsx';
import PanelReportes from './PanelReportes.jsx';

function Panel(props) {
	switch(props.tipo) {
		case "resumen":	
			return <PanelResumen aplicativo={props.aplicativo} modulo={props.modulo}/>;

		case "reportes":	
			return <PanelReportes/>;

		default:
			return <div/>
	}
}

export default Panel;
