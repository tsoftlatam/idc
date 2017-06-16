import React from 'react';

function Dashboard(props) {
	return (
		<div>
			<h4 className="panel-title">Dashboard</h4>

			<span>
				<img className="donut" src="img/donut.png"/>
				<img className="chart" src="img/chart.svg"/>
				<img className="traffic" src="img/traffic.svg"/>
			</span>
		</div>
	);
}

export default Dashboard;
