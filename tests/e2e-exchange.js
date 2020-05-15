import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import ExchangePage from '../page-objects/pages/ExchangePage';
import Navbar from '../page-objects/components/Navbar';
import InsideNavbar from '../page-objects/components/InsideNavbar';

describe('E2E - Tests - Currency Exchange', () => {
	it('Should log into application', () => {
		App.openLoginPage();
		LoginPage.login('username', 'password');
		Navbar.insideNavBarIsVisible();
		// LoginPage.formIsVisible();
		// LoginPage.fillForm('username', 'password');
		// LoginPage.submitForm();
		// browser.url('http://zero.webappsecurity.com/index.html');
		// $('#signin_button').waitForExist();
		// $('#signin_button').click();
		// $('#login_form').waitForExist();
		// $('#user_login').setValue('username');
		// $('#user_password').setValue('password');
		// $('input[type="submit"]').click();
		// $('.nav-tabs').waitForExist();
	});

	it('Should make currency exchange', () => {
		// $('#pay_bills_tab').waitForExist();
		// $('#pay_bills_tab').click();
		InsideNavbar.clickPayBillsTab();
		InsideNavbar.clickExchangeLink();
		$('#tabs > ul > li:nth-child(3) > a').waitForExist();
		$('#tabs > ul > li:nth-child(3) > a').click();
		const currencySelect = ExchangePage.currencySelect;
		// const currencySelect = $('#pc_currency');'
		currencySelect.waitForExist();
		currencySelect.selectByAttribute('value', 'GBP');
		ExchangePage.setAmount('500');
		ExchangePage.selectDollars();
		ExchangePage.submitForm();
		const message = ExchangePage.message;
		// $('#pc_amount').setValue('500');
		// $('#pc_inDollars_true').click();
		// $('#purchase_cash').click();
		// const message = $('#alert_content');
		expect(message).toHaveText(
			'Foreign currency cash was successfully purchased.'
		);
	});
});
