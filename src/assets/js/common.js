class Hoge {
	constructor(fuga) {
		this.fuga = fuga;
	}

	piyo() {
		console.log(this.fuga);
	}
}

const hoge = new Hoge('FUGA');
hoge.piyo();
