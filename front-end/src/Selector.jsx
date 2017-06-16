import React from 'react';

class Selector extends React.Component {

	constructor(props) {
		super(props);
		this.state = { apps: props.apps, switcher: props.switcher };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.state.switcher(event.target.value);
	}

	render() {
		let apps = [];

		for(let i = 0; i < this.state.apps.length; ++i) {
			apps.push(<option value={this.state.apps[i]}>{this.state.apps[i]}</option>);
		}

		return (
			<div className="mdl-selectfield mdl-js-selectfield">
				<select className="mdl-selectfield__select" id="selector-aplicativo" name="selector-aplicativo" onChange={this.handleChange}>
					<option value="_GLOBAL_" selected>Dashboard global</option>
					{apps}
				</select>
				<label className="mdl-selectfield__label" htmlFor="selector-aplicativo">Seleccione:</label>
				<div className="mdl-selectfield__icon"><i className="material-icons">arrow_drop_down</i></div>
			</div>
		);
	
	}
}

export default Selector;
