import LoginPage from '../page-objects/pages/LoginPage';
import App from '../page-objects/App';
import Navbar from '../page-objects/components/Navbar';
import Base from '../page-objects/Base';

describe('E2E Tests - Login / Logout Flow', () => {
	it('Should not login with invalid credentials', () => {
		// browser.url('http://zero.webappsecurity.com/index.html');
		// const button = $('#signin_button')
		// button.waitForExist();
		// $('#signin_button').waitForExist();
		// $('#signin_button').click();
		// $('#login_form').waitForExist();
		// $('#user_login').setValue('invalid');
		// $('#user_password').setValue('invalid');
		// $('input[type="submit"]').click();
		// LoginPage.pauseShort();
		App.openHomepage();
		Navbar.clickSignIn();
		LoginPage.formIsVisible();
		LoginPage.fillForm('invalid username', 'invalid password');
		LoginPage.submitForm();
		const message = LoginPage.error;
		// const error = $('.alert-error');
		expect(message).toHaveText('Login and/or password are wrong.');
	});

	it('Should login with valid credentials', () => {
		// browser.url('http://zero.webappsecurity.com/index.html');
		App.openHomepage();
		// $('#signin_button').waitForExist();
		// $('#signin_button').click();
		// $('#login_form').waitForExist();
		// $('#user_login').setValue('username');
		// $('#user_password').setValue('password');
		// $('input[type="submit"]').click();
		LoginPage.pauseShort();
		Navbar.clickSignIn();
		LoginPage.formIsVisible();
		LoginPage.fillForm('username', 'password');
		LoginPage.submitForm();
		Navbar.insideNavBarIsVisible();
		// $('.nav-tabs').waitForExist();
	});

	it('Should logout from app', () => {
		// $('.icon-user').waitForExist();
		// $('.icon-user').click();
		// $('#logout_link').waitForExist();
		// $('#logout_link').click();
		App.logout();
		Navbar.signInButtonIsVisible();
		// $('#pages-nav').waitForExist();
	});
});
