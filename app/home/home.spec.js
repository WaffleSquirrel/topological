// Tests for named imports.
import { getPageTitle } from './home';

describe("Home view", function () {

    it("can get default page title", function () {
        expect(getPageTitle()).toBe('Topological');
    });
    
});
