const LandingPage = require("../pageobjects/landing.page");

describe("Mobile viewport", () => {
	it("menu should be visible on menu icon click in smaller viewports", async () => {
		await LandingPage.openAndAcceptCookies();
		await LandingPage.setMobileSize();

		await LandingPage.openSideMenu();
		const sideNav = await LandingPage.sideNavigation;
		await sideNav.waitForDisplayed({ timeout: 5000 });
	});

	it("should not load previous and next slide button in smaller viewports", async () => {
		await expect($("aria/Previous slide")).not.toBeExisting();
		await expect($("aria/Next slide")).not.toBeExisting();
	});
});
