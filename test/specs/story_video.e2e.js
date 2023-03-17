const LandingPage = require("../pageobjects/landing.page");

describe("Landing page", () => {
	it("should start story vidoe by clicking button", async () => {
		await LandingPage.openAndAcceptCookies();

		await LandingPage.startStoryVideo();
		await expect(LandingPage.storyVideoControl).toBe(true);
	});
});
