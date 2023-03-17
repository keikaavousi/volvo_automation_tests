const LandingPage = require("../test/pageobjects/landing.page");

describe("Intro video", () => {
	it("should start intro video by clicking watch button", async () => {
		await LandingPage.openAndAcceptCookies();

		await expect(LandingPage.introVideoPreview).toBeExisting();
		await LandingPage.startIntroVideo();
		await expect(LandingPage.introVideoPreview).not.toBeExisting();
		await expect(LandingPage.introVideo).toBeExisting();
	});
});
