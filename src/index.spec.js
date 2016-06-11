import expect from 'expect'

import Main from './index'

describe('Main', _ => {
	let main;

	beforeEach(done => {
		main = new Main
		done()
	})

	it('should have text property set as soon as created', done => {
		expect(main.getText()).toExist()
		expect(main.getText()).toEqual('This is where you start your ES6 !')
		
		done()
	})
})
