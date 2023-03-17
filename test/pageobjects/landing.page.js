const Page = require("./page");

/**
 * sub page containing specific selectors and methods for landing page
 */
class LandingPage extends Page {
	//************************************************************************************************ */
	// Selectors
	//************************************************************************************************ */

	/**
	 * Gets the volvo logo in header
	 */
	get volvoLogo() {
		return $("aria/Volvo");
	}

	/**
	 * Gets the accept cookies button in accept cookies modal
	 */
	get acceptCookiesButton() {
		return $("#onetrust-accept-btn-handler");
	}

	/**
	 * Gets the intro's preview video tag
	 */
	get introVideoPreview() {
		return $("#Video-1 video");
	}

	/**
	 * Gets the intro's main video iframe tag
	 */
	get introVideo() {
		return $("#Video-1 iframe");
	}

	/**
	 * Gets the intro video watch button
	 */
	get IntroVideoWatchButton() {
		return $("#Video-1 button");
	}

	/**
	 * Check if the first story video's is played or not based on showing controls
	 */
	get storyVideoControl() {
		return (
			$("[data-autoid = 'videoTestimonials:video-0']").getAttribute(
				"controls",
			) !== null
		);
	}

	/**
	 * Gets the first car in carousel link
	 */
	get carDetailLink() {
		return $("aria/Explore XC90 Recharge");
	}

	/**
	 * Gets the learn more button which has safety page link
	 */
	get safetyLink() {
		return $("aria/Learn more");
	}

	/**
	 * Gets the navigation's toggle button
	 */
	get navToggleButton() {
		return $("#sitenav-sidenav-toggle");
	}

	/**
	 * Gets the side navigation
	 */
	get sideNavigation() {
		return $("[id='nav:sideNavigation']");
	}

	/**
	 * Gets the side navigation close button
	 */
	get sideNavigationCloseButton() {
		return $("aria/Close");
	}

	//************************************************************************************************ */
	// Methods
	//************************************************************************************************ */

	/**
	 * Clicks on accept cookies button in accept cookies modal
	 */
	async acceptCookies() {
		if (this.acceptCookiesButton !== null) {
			await this.acceptCookiesButton.click();
		}
	}

	/**
	 * Clicks on intro video watch button to play
	 */
	async startIntroVideo() {
		await this.IntroVideoWatchButton.click();
	}

	/**
	 * Clicks on first story video to play
	 */
	async startStoryVideo() {
		const video = await $('[data-autoid="videoTestimonials:video-0"]');
		video.click();
	}

	/**
	 * Clicks on car's detail link
	 */
	async goToCarDetailLink() {
		await this.carDetailLink.click();
	}

	/**
	 * Clicks on learn more button to go to safety page
	 */
	async goToSafetyLink() {
		await this.safetyLink.click();
	}

	/**
	 * Clicks on learn more button to go to safety page
	 */
	async goToSafetyLink() {
		await this.safetyLink.click();
	}

	/**
	 * Clicks on navigation's toggle button
	 */
	async openSideMenu() {
		await this.navToggleButton.click();
	}

	/**
	 * Clicks on navigation's close icon
	 */
	async closeSideMenu() {
		await this.sideNavigationCloseButton.click();
	}

	/**
	 * Opens campaign's landing page
	 */
	open() {
		return super.open("v/car-safety/a-million-more");
	}

	/**
	 * Opens campaign's landing page and accept cookies
	 */
	openAndAcceptCookies() {
		super.open("v/car-safety/a-million-more");
		return this.acceptCookies();
	}

	/**
	 * Set the width and height of the window to a sample mobile size
	 */
	setMobileSize() {
		return super.setViewPort(414, 736);
	}
}

module.exports = new LandingPage();
