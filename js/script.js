function Clock(e) {
	this.element = e;
	this.fullFormat = true;

	this.interval = setInterval(() => this.render(), 1000);

	this.element.addEventListener('click', () => this.changeFormat());
}

Clock.prototype.render = function () {
	if (this.fullFormat) {
		this.element.innerHTML = new Date().toLocaleTimeString();
	} else {
		this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
	}
}

Clock.prototype.changeFormat = function () {
	this.fullFormat = !this.fullFormat;
}

let clockOne = new Clock(document.querySelector('.first-clock'));

let clockTwo = new Clock(document.querySelector('.second-clock'));
clockTwo.changeFormat();