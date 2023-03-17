const LandingPage = require("../pageobjects/landing.page");

describe("Landing page", () => {
	it("should open safety innovation page", async () => {
		await LandingPage.openAndAcceptCookies();

		await LandingPage.goToSafetyLink();
		await expect(await browser.getUrl()).toContain(
			"https://www.volvocars.com/intl/v/car-safety/safety-heritage",
		);
	});
});
