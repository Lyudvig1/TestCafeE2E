let os = require("os");

module.exports = {
    skipJsErrors: true,
    hostname: os.hostname(),
    browsers: "chrome",
    baseUrl: "https://demo.nopcommerce.com",
    speed: 1,
    concurrency: 1,
    selectorTimeout: 5000,
    assertionTimeout: 5000,
    pageRequestTimeout: 25000,
    testExecutionTimeout: 180000
}
