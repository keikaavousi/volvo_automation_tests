const LandingPage = require("../pageobjects/landing.page");

describe("Regression Test - compare screenshots", () => {
	it("should compare successful with a baseline", async () => {
		await LandingPage.openAndAcceptCookies();

		// Check a full page screenshot
		await expect(await browser.checkFullPageScreen("fullPage")).toEqual(0);
	});
});
