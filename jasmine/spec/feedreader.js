/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    // TEST SUITE 1 -> This is our first test suite - a test suite  just contains a related set of tests. This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
    describe('RSS Feeds', function () {

        // TEST 1 ->  tests to make sure that the allFeeds variable has been defined and that it is not empty

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // TEST 2 -> a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

        it('have a valid URL defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // TEST 3 -> a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
        it('have valid names defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    // TEST SUITE 2 ->  "The menu"
    describe('The menu', function () {
        // TEST 4 -> a test that ensures the menu element is hidden by default.
        it('is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        // TEST 5 ->  a test that ensures the menu changes visibility when the menu icon is clicked
        it('toggles visibility on click', function () {
            $('.menu-icon-link').trigger('click'); // the menu displays when clicked
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click'); //  menu hides when clicked again
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    // TEST SUITE 2 ->  "Initial Entries"
    describe('Initial Entries', function () {

    });


    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());
