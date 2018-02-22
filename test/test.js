const expect = require('chai').expect;
let hash = require('../main');
describe('Basic tests', () => {

	it('Must hash an object', () => {
		let obj = {
			a: 1,
			b: "3"
		};
		let o = hash(obj,'secret');
	});

	it('Has must mach regardless of properties order in object', () => {
		let obj = {
			a: 1,
			b: "3"
		};
		let o = hash(obj,'secret');

		let obj2 = {
			b: "3",
			a: 1
		};
		let o2 = hash(obj2, 'secret');
		expect(o2).equal(o);
	});
});