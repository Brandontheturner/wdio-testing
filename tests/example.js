<<<<<<< HEAD
describe('First Steps with WebdriverIO', () => {
    it('Load Example Website', () => {
        browser.url('http://www.example.com/');
        browser.pause(2000);
        expect(browser).toHaveUrl('http://www.example.com/');
        expect(browser).toHaveTitle('Example Domain');
    })

    it('h1 should be visible', () => {
        const h1 = $('h1');
        h1.waitForExist();
        expect(h1).toBeVisible();
    })

    it('p tag should be visible', () => {
        const p = $('p');
        p.waitForExist();
        expect(p).toBeVisible();
    })

    it('Check link value', () => {
        const link = $('a');
        expect(link).toHaveLink('https://www.iana.org/domains/example');
    }) 

    it('get element text', () => {
        const text = $('h1').getText();
        const element = $('h1');
        element.waitForExist();
        expect(element).toHaveText('Example Domain');
    })
})
=======
import { short, medium, long } from '../lib/timeouts';
import { mobile, tablet, desktop } from '../lib/devices';

describe('First Steps with WebdriverIO', () => {
	it('Load Example Website', () => {
		browser.url('http://www.example.com');
		browser.pause(short);
		expect(browser).toHaveUrl('http://www.example.com/');
		expect(browser).toHaveTitle('Example Domain');
	});

	it('H1 should be visible', () => {
		// Get selector and save it to variable
		const h1 = $('h1');
		h1.waitForExist();
		// Do assertion
		expect(h1).toBeVisible();
	});

	it('P tag should be visible', () => {
		const p = $('p');
		p.waitForExist();
		expect(p).toBeVisible();
	});

	it('Check link value', () => {
		const link = $('a');
		expect(link).toHaveLink('https://www.iana.org/domains/example');
	});

	it('Get Element Text', () => {
		const text = $('h1').getText();
		const element = $('h1');
		element.waitForExist();

		expect(element).toHaveText('Example Domain');
	});

	it('Assert Attribute', () => {
		browser.url('https://devexpress.github.io/testcafe/example/');
		const button = $('#submit-button');
		button.waitForExist();
		expect(button).toHaveAttrContaining('type', 'submit');
	});

	it('Assert Value', () => {
		const button = $('#populate');
		button.waitForExist();
		expect(button).toHaveValue('Populate');
	});

	it('Save Screenshot', () => {
		browser.saveScreenshot('your-name.png');
	});

	it('Change Browser Viewport', () => {
		browser.setWindowSize(1650, 1050);
		browser.pause(short);
	});

	it('Set mobile View', () => {
		browser.setWindowSize(mobile[0], mobile[1]);
		browser.pause(short);
	});

	it('set tablet view', () => {
		browser.setWindowSize(tablet[0], tablet[1]);
		browser.pause(short);
	});

	it('set desktop view', () => {
		browser.setWindowSize(desktop[0], desktop[1]);
		browser.pause(short);
	});
});
>>>>>>> 59af96538768fd0f5b3a3299ded1e7994b65b225
