const LandingPage = require("../pageobjects/landing.page");

describe("Header", () => {
	it("should show logo", async () => {
		await LandingPage.openAndAcceptCookies();
		await expect(LandingPage.volvoLogo).toBeExisting();
	});

	it("should show menu on menu icon click", async () => {
		await LandingPage.openSideMenu();
		await expect(
			await LandingPage.sideNavigation.getAttribute("aria-hidden"),
		).toBe("false");
	});

	it("should detect menu close button when element is clickable", async () => {
		const closeButton = await LandingPage.sideNavigationCloseButton;
		await browser.waitUntil(() => closeButton.isClickable());

		// the following codes doesn't work due to 403 error on loading script for button click

		// await closeButton.click();
		// const sideNav = await LandingPage.sideNavigation;
		// await sideNav.waitForDisplayed({ reverse: true });
	});
});
