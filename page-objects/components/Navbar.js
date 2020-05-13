import Base from '../Base';

class Navbar extends Base {
	get searchBox() {
		return $('#searchTerm');
	}

	get signInButton() {
		return $('#signin_button');
	}
	get insideNavBar() {
		return $('.nav-tabs');
	}

	get settingButton() {
		return $('.icon-cog');
	}

	get helpButton() {
		return $('#help_link');
	}

	search(text) {
		this.searchBox.waitForExist();
		this.searchBox.setValue(text);
		browser.keys('Enter');
	}

	signInButtonIsVisible() {
		this.signInButton.waitForExist();
	}

	clickSignIn() {
		this.signInButton.waitForExist();
		this.signInButton.click();
	}

	insideNavBarIsVisible() {
		this.insideNavBar.waitForExist();
	}

	clickSettings() {
		this.settingButton.waitForExist();
		this.settingButton.click();
	}

	clickHelp() {
		this.helpButton.waitForExist();
		this.helpButton.click();
	}
}

export default new Navbar();
