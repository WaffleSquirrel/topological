// Tests for default imports
import getPageTitle from './home-default';

describe("home view (default)", function () {

    it("can get default page title", function () {
        expect(getPageTitle()).toBe('Topological');
    });

    it("can get default copyright info", function () {
        expect(getCopyright()).toBe('Copyright @copy; 2015');
    });
    
});
