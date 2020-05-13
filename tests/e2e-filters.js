import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import FiltersPage from '../page-objects/pages/FiltersPage';
import Navbar from '../page-objects/components/Navbar';
import InsideNavbar from '../page-objects/components/InsideNavbar';

describe('E2E Tests - Transactions Filter', () => {
	it('Should log into application', () => {
		App.openLoginPage();
		LoginPage.formIsVisible();
		LoginPage.fillForm('username', 'password');
		LoginPage.submitForm();
		Navbar.insideNavBarIsVisible();
		// browser.url('http://zero.webappsecurity.com/index.html');
		// $('#signin_button').waitForExist();
		// $('#signin_button').click();
		// $('#login_form').waitForExist();
		// $('#user_login').setValue('username');
		// $('#user_password').setValue('password');
		// $('input[type="submit"]').click();
		// $('.nav-tabs').waitForExist();
	});

	it('Transaction Filter Should Work', () => {
		// $('#account_activity_tab').waitForExist();
		// $('#account_activity_tab').click();
		// $('#tabs > ul > li:nth-child(2) > a').waitForExist();
		InsideNavbar.clickAccountActivityTab();
		InsideNavbar.clickFiltersLink();
		// $('#tabs > ul > li:nth-child(2) > a').click();
		// $('#aa_description').waitForExist();
		// $('#aa_description').setValue('Test');
		// $('button[type="submit"]').click();
		// $('#filtered_transactions_for_account').waitForExist();
		FiltersPage.fillDescription('Test');
		FiltersPage.submitFilter();
		FiltersPage.resultsTableIsVisible();
		const message = FiltersPage.message;
		// const message = $('.well');
		expect(message).toHaveText('No results.');
	});
});
