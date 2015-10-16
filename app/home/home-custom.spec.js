// Named imports test
import { getPageTitle, getCopyright } from './home-custom';

describe("home view (custom)", function () {

    it("can get the custom page title", function () {
        expect(getPageTitle()).toBe('{Some Custom Title}');
    });

    it("can get the custom copyright info", function () {
        expect(getCopyright()).toBe('Copyright @copy; {Some Year} {Some Owner}');
    });

});
