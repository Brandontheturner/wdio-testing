import App from '../page-objects/App';
import Navbar from '../page-objects/components/Navbar';

describe('E2E Tests - Search', () => {
	it('Should load home page', () => {
		// browser.url('http://zero.webappsecurity.com/index.html');
		App.openHomepage();
		// $('#searchTerm').waitForExist();
	});

	it('Should submit searchbox', () => {
		// $('#searchTerm').setValue('bank');
		// browser.keys('Enter');
		Navbar.search('bank');
		const resultsTitle = $('h2');
		resultsTitle.waitForExist();
		expect(resultsTitle).toHaveText('Search Results:');
	});
});
