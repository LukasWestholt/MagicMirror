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
	address: "0.0.0.0",	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	// Solves keychain problems. I got dialog: "Choose password for new keyring"
	electronSwitches: ["use-mock-keychain", { "password-store": "basic" }],
	ipWhitelist: [],	// Set [] to allow all IP addresses
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
			module: "MMM-Carousel",
			position: "top_bar",
			config: {
				transitionInterval: 10000,
				ignoreModules: [],
				mode: "positional",
				bottom_bar: {
					enabled: true,
					ignoreModules: [],
				}
			}
		},
		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: "${LAT}",
				lon: "${LON}"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: "${LAT}",
				lon: "${LON}"
			}
		},
		{
			module: "MMM-OnThisDayWikiApi",
			position: "bottom_bar", //"top_left",
			config: {
				language: "de",
				title: "Heute",
				maxWidth: 200,
			},
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			//updateInterval: 1000 * 1000,
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "Tagesschau",
						url: "https://www.tagesschau.de/index~rss2.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-PublicTransportHafas",
			position: "bottom_right",

			config: {
				hafasProfile: "insa",
				// Departures options
				stationID: "${STATIONID}",                   // Replace with your stationID!
				stationName: "${STATIONNAME}", // Replace with your station name!
				direction: "",                    // Show only departures heading to this station. (A station ID.)
				excludedTransportationTypes: [],  // Which transportation types should not be shown on the mirror? (comma-separated list of types) possible values: "tram", "bus", "suburban", "subway", "regional" and "national"
				ignoredLines: [],                 // Which lines should be ignored? (comma-separated list of line names)
				timeToStation: 1,                // How long do you need to walk to the next Station?

				// Look and Feel
				displayLastUpdate: true,          // Display the last time of module update.
				showAbsoluteTime: false,
				tableHeaderOrder: [ "time", "line", "direction" ],
				maxUnreachableDepartures: 0,      // How many unreachable departures should be shown?
				maxReachableDepartures: 5,        // How many reachable departures should be shown?
				showColoredLineSymbols: true,     // Want colored line symbols?
				customLineStyles: "",             // Prefix for the name of the custom css file. ex: Leipzig-lines.css (case sensitive)
				showOnlyLineNumbers: false,       // Display only the line number instead of the complete name, i. e. "11" instead of "STR 11"
				showTableHeadersAsSymbols: true,  // Table Headers as symbols or text?
				useColorForRealtimeInfo: true     // Want colored real time information (timeToStation, early)?
			},
		},
		{
			module: "MMM-Bring",
			position: "bottom_left",
			config: {
				email: "${BRING_MAIL}",
				password: "${BRING_PW}",
				updateInterval: 15, // in Minutes
				listName: "Zuhause", // optional
				showListName: false,
				activeItemColor: "black",
				latestItemColor: "#4FABA2",
				showLatestItems: false,
				maxItems: 0,
				maxLatestItems: 0,
				locale: "de-DE",
				useKeyboard: false,
				listDropdown: false
			}
		},
		{
			module: 'mmm-systemtemperature',
			position: 'top_center',	// This can be any of the regions.
			classes: 'small dimmed', // Add your own styling. Optional.
			config: {
				prependString: 'System '
			}
		},
		{
			module: 'MMM-WiFiPassword',
			position: "top_center",
			config: {
				qrSize: 100,
				colorLight: "#000",
				colorDark: "#fff",
				header: "Local WiFi",
				network: "${WIFI_NAME}",
				password: "${WIFI_PW}",
				showPassword: false,
				showAuthType: false,
				showNetwork: false,
			}
		},
		// TODO now working with uncaught exception "hostname=undefined"
		// {
		// 	module: "MMM-Cinestar-FDW",
		// 	position: "top_right",
		// 	config: {},
		// },
		{
			module: "MMM-Canteen",
			position: "top_left",
			config: {
				canteenName: "Mensa am Park",
				canteen: 63,
				status: "students",
				switchTime: "18:00",
				showVeggieColumn: false,
				showOnlyKeywords: ["Veganes Gericht", "WOK"],
			}
		},
		{
			module: "MMM-Canteen",
			position: "top_left",
			config: {
				canteenName: "Elsterbecken",
				canteen: 65,
				status: "students",
				switchTime: "14:00",
				showVeggieColumn: false,
				showOnlyKeywords: ["Veganes Gericht", "WOK"],
			}
		},
		{
			module: "MMM-Canteen",
			position: "top_right",
			config: {
				canteenName: "Medizincampus",
				canteen: 67,
				status: "students",
				switchTime: "14:00",
				showVeggieColumn: false,
				showOnlyKeywords: ["Veganes Gericht", "WOK"],
			}
		},
		{
			module: "MMM-Canteen",
			position: "top_right",
			config: {
				canteenName: "Petersteinweg",
				canteen: 68,
				status: "students",
				switchTime: "14:00",
				showVeggieColumn: false,
				showOnlyKeywords: ["Veganes Gericht", "WOK"],
			}
		},
		// {
		// 	module: "MMM-RepoStats",
		// 	position: "top_left",
		// 	config: {
		// 		type: "github",
		// 		title: "GitHub",
		// 		repoList: [
		// 			"LukasWestholt/blog",
		// 			"emmaw-py/promotion",
		// 		],
		// 	},
		// },
		// {
		// 	module: "MMM-MagicMover",
		// 	config: {
		// 		updateInterval: 10 * 60 * 1000,
		// 		ignoredRegions: [],
		// 		maxMove: 15,
		// 		moveWholescreen: false,
		// 	}
		// },
		// {
		//   module: 'MMM-Screencast',
		//   position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
		//   config: {
		//     position: 'center',
		//     height: 400,
		//     width: 600,
		//     castName: 'MagicMirror',
		//   }
		// }
		{
			module: 'MMM-homeassistant-sensors',
			position: 'top_left',
			config: {
				host: "${HOMEASSISTANT_HOST}",
				port: "8123",
				https: false,
				token: "${HOMEASSISTANT_TOKEN}",
				rowClass: 'big',
				values: [
					{
						sensor: "${SENSOR_ELECTRICITY_PRICE}",
						name: "Strompreis aktuell bei %v% ct/kWh",
						multiplier: 100,
						displayvalue: false,
						displayunit: false,
						highAlertThreshold: 0.35,
					},
				]
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
