// JS
import _ from 'lodash';
import '../vendor/mdl/material';

// CSS
import '../vendor/mdl/material.css';
import '../styles/custom.css';

function component () {
	var element = document.createElement("div");

	element.innerHTML = _.join(["Bienvenido","inspector"], " ");

	return element;
}

document.body.appendChild(component());
