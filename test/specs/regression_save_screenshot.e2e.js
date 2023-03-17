const LandingPage = require("../pageobjects/landing.page");

describe("Regression Test - save screenshot", () => {
	it("should save full page screenshot", async () => {
		await LandingPage.openAndAcceptCookies();

		//Save a full page screenshot
		await browser.saveFullPageScreen("fullPage");
	});
});
