import App from '../page-objects/App';
import FeedbackPage from '../page-objects/pages/FeedbackPage';

describe('E2E - Feedback', () => {
	it('Should load feedback form', () => {
		// browser.url('http://zero.webappsecurity.com/index.html');
		// App.openHomepage();
		// $('#feedback').waitForExist();
		// $('#feedback').click();
		// $('form').waitForExist();
		App.openFeedbackPage();
		FeedbackPage.formIsVisible();
	});

	it('Should submit feedback form', () => {
		// $('#name').setValue('Name');
		// $('#email').setValue('test@testing.com');
		// $('#subject').setValue('subject');
		// $('#comment').setValue(
		// 	'This is a message'
		// );
		// $('input[type="submit"]').click();
		FeedbackPage.fillForm(
			'Name',
			'test@test.com',
			'The subject of my desire',
			'Massages for everyone'
		);
		FeedbackPage.submitForm();
		expect(browser).toHaveUrl(
			'http://zero.webappsecurity.com/sendFeedback.html'
		);
	});
});
