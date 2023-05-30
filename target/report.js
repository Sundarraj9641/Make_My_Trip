$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Flights.feature");
formatter.feature({
  "name": "Booking flight",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Flights"
    }
  ]
});
formatter.scenario({
  "name": "Booking the flight under round trip",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Flights"
    },
    {
      "name": "@Round_trip"
    }
  ]
});
formatter.step({
  "name": "user is on the flight booking page in roundTrip",
  "keyword": "Given "
});
formatter.match({
  "location": "Flights.user_is_on_the_flight_booking_page_roundTrip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Round trip button in roundTrip",
  "keyword": "When "
});
formatter.match({
  "location": "Flights.user_click_on_round_trip_button_roundTrip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the from city in roundTrip",
  "keyword": "When "
});
formatter.match({
  "location": "Flights.user_enter_the_from_city_roundTrip()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to send message to renderer\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d113.0.5672.127)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LIN76001689\u0027, ip: \u0027192.168.100.6\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 112.0.5615.49 (bd2a7bcb881c..., userDataDir: C:\\Users\\SUMAHALI\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57393}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 17cc7165395b7b0adbd1f91f829ff983\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"react-autowhatever-1-section-0-item-5\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy17.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:686)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:682)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.pagefactory.FlightsPageFactory.roundTrip_from(FlightsPageFactory.java:182)\r\n\tat com.step_definitions.Flights.user_enter_the_from_city_roundTrip(Flights.java:96)\r\n\tat ✽.user select the from city in roundTrip(src/test/resources/Features/Flights.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user select the to city in roundTrip",
  "keyword": "When "
});
formatter.match({
  "location": "Flights.user_enter_the_to_city_roundTrip()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the date of traveling in roundTrip",
  "keyword": "When "
});
formatter.match({
  "location": "Flights.user_select_the_date_of_traveling_roundTrip()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the details of passengers in roundTrip",
  "keyword": "When "
});
formatter.match({
  "location": "Flights.user_enter_the_details_of_passengers_roundTrip()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search in roundTrip",
  "keyword": "And "
});
formatter.match({
  "location": "Flights.click_on_search_roundTrip()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is able to see the available flights in roundTrip",
  "keyword": "Then "
});
formatter.match({
  "location": "Flights.user_is_able_to_see_the_available_flights_roundTrip()"
});
formatter.result({
  "status": "skipped"
});
});