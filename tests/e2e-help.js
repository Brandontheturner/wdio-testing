import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';
import HelpPage from '../page-objects/pages/HelpPage';

describe('E2E Testing - Help Section', () => {
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

	it('Should load help content', () => {
		// $('.icon-cog').click();
		Navbar.clickSettings();
		// $('#help_link').waitForExist();
		// $('#help_link').click();
		Navbar.clickHelp();
		// const title = $('.span8 > h3');
		const title = HelpPage.title;
		expect(title).toHaveText('How do I log into my account?');
		HelpPage.clickOnTransferFunds();
		// $('*=How do I transfer funds?').click();
		expect(title).toHaveText('How do I transfer funds?');
		HelpPage.clickOnPayBills();
		// $('*=pay bills').click();
		expect(title).toHaveText('How do I pay bills?');
	});
});
