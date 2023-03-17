const LandingPage = require("../pageobjects/landing.page");

describe("Car detail's link", () => {
	it("should open car's detail page", async () => {
		await LandingPage.openAndAcceptCookies();

		await LandingPage.goToCarDetailLink();
		await expect(await browser.getUrl()).toContain(
			"https://www.volvocars.com/intl/cars/xc90-hybrid",
		);
	});
});
