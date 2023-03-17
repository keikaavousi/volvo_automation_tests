/**
 * main page object containing common methods
 * that is shared across all page objects
 */
module.exports = class Page {
	/**
	 * Opens a sub page of the page
	 * @param path path of the sub page
	 */
	open(path) {
		return browser.url(`https://www.volvocars.com/intl/${path}`);
	}

	/**
	 * Set the width and height of the window to a specific size
	 * @param width width of the window
	 * @param height height of the window
	 */
	setViewPort(width, height) {
		return browser.setWindowSize(width, height);
	}
};
