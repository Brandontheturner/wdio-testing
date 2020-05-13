import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import PaymentPage from '../page-objects/pages/PaymentPage';
import InsideNavbar from '../page-objects/components/InsideNavbar';
import Navbar from '../page-objects/components/Navbar';

describe('E2E Tests - Pay', () => {
	it('Should log into application', () => {
		App.openLoginPage();
		LoginPage.login('username', 'password');
		// LoginPage.formIsVisible();
		// LoginPage.fillForm('username', 'password');
		// LoginPage.submitForm();
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

	it('Should make payment', () => {
		// $('#pay_bills_tab').waitForExist();
		// $('#pay_bills_tab').click();
		InsideNavbar.clickPayBillsTab();
		const selectPayee = PaymentPage.payeeSelect;
		// const selectPayee = $('#sp_payee');
		selectPayee.waitForExist();
		selectPayee.selectByAttribute('value', 'apple');
		const selectAccount = PaymentPage.accountSelect;
		// const selectAccount = $('#sp_account');
		selectAccount.waitForExist();
		selectAccount.selectByVisibleText('Loan');
		PaymentPage.fillForm('500', '2020-03-31', 'test');
		PaymentPage.submitForm();
		// $('#sp_amount').setValue('500');
		// $('#sp_date').setValue('2020-04-03');
		// $('#sp_description').setValue('Testing tester test');
		// $('#pay_saved_payees').click();
		// const message = $('#alert_content');
		const message = PaymentPage.message;
		expect(message).toHaveText('The payment was successfully submitted.');
	});
});
