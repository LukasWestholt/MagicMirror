/* Config
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
  address: "localhost",	// Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out or empty, is "localhost"
  port: 8081,
  basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
  // you must set the sub path here. basePath must end with a /
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.178.0/24"],	// Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
  httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
  httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

  language: "de",
  locale: "de-DE",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
  timeFormat: 24,
  units: "metric",

  modules: [
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "MMM-Cinestar-FDW",
      position: "top_right",
      config: {},
    },
    {
      module: "MMM-Canteen",
      position: "top_left",
      config: {
        canteenName: "Mensa am Park",
        canteen: 63,
        status: "students",
        switchTime: "18:00",
        showOnlyKeywords: ["Veganes Gericht", "WOK"],
      }
    },
    {
      module: "MMM-Canteen",
      position: "top_right",
      config: {
        canteenName: "Elsterbecken",
        canteen: 65,
        status: "students",
        switchTime: "14:00",
        showOnlyKeywords: ["Veganes Gericht", "WOK"],
      }
    },
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
