let config = {
	address: "localhost", 	
	port: 8080,
	basePath: "/", 	
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	

	useHttps: false, 		
	httpsPrivateKey: "", 	
	httpsCertificate: "",

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], 
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
			classes: 'pill kimtree'
		},
		{
			module: "updatenotification",
			position: "top_bar",
			classes: 'pill kimtree'
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'everyone'
		},
		{
		module: 'MMM-Screencast',
		classes: 'everyone',
		position: 'top_left',
		config: {
			position: 'bottomCenter',
			height: 150,
			width: 300,
		}
        },
		{
			module: "calendar2",
			header: "내 저장된 일정",
			position: "top_left",
			classes: 'pill',
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						
						url: "https://calendar.google.com/calendar/ical/pansyscent%40gmail.com/private-f974f2b13ddc006bd7a5b517cc4f1462/basic.ics"	}
				]
			}
		},
				{
			module: "calendar",
			header: "내 저장된 일정",
			position: "top_left",
			classes: 'kimtree',
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						
						url: "https://calendar.google.com/calendar/ical/nawkim98%40gmail.com/public/basic.ics"					
						}
				]
			}},
		{
			module: 'MMM-BackgroundSlideshow',
			classes:'default',
			position: 'fullscreen_below',
			config: {
			imagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/'],
			transitionImages: false,
			randomizeImageOrder: true
		}
		},

		{
			module: "weather",
			position: "top_right",
			header: "현재 날씨",
			classes: 'pill kimtree',
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "서울특별시",
				locationID: "1835847",
				apiKey: "9672c481ee3879ad9bb2e3166974367f"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "날씨 예보",
			classes: 'pill kimtree',
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "서울특별시",
				locationID: "1835847",
				apiKey: "9672c481ee3879ad9bb2e3166974367f"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			classes: 'pill kimtree',
			config: {
				feeds: [
					{
						title: "현재 주요 뉴스",
						url: "https://news.google.com/rss?gl=KR&hl=ko&ceid=KR:ko"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		
		{
			module: 'MMM-AirQuality',
			position: 'top_left',
			classes: 'pill kimtree',
			config: {
			location: 'seoul',
			lang: "kr"
			}
		},
		{
			module: 'MMM-Face-Reco-DNN',
			config: {
			 
			  logoutDelay:60000,
			  checkInterval: 2000,
			  noFaceClass: 'noface',
			  unknownClass: 'unknown',
			  knownClass: 'known',
			  defaultClass: 'default',
			  everyoneClass: 'everyone',
			  alwaysClass: 'always',
			  cascade: 'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
			  encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
			  usePiCamera: 1,
			  source: 0,
			  rotateCamera: 0,
			  method: 'dnn',
			  detectionMethod: 'hog',
			  animationSpeed: 0,
			  pythonPath: null,
			  welcomeMessage: true,
			  usernameDisplayMapping: null,
			  extendDataset: false,
			  dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
			  tolerance: 0.6,
			  multiUser: 0,
			}
		},

		

		{
			 module: "MMM-DHT-Sensor",
			 position: 'top_right',
			 header: "실내 온습도",
			 classes: 'pill kimtree',
			 config: {
				sensorPin: 4,
				sensorType: 11,
				updateInterval: 1 * 1000,
				initialLoadDelay: 0,
				animationSpeed: 1000,
				units: "metric",
				relativeScale: 35,
				debug: false
				}
		},
		/*{
		module: 'MMM-iFrame',
		classes: 'pill kimtree',
		position: 'top_right',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: ["http://52.231.91.247:3000/d/dM3j6fFnk/smartmirror_ai_temperature?orgId=1&viewPanel=2&refresh=1d&from=1636008855947&to=1636095255948"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
				width: "400", // width of iframe
				height: "700", // height of iframe
				frameWidth: "600" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
			}
		},*/
		{ 
			module : 'MMM-GrafanaChart', 
		    position : 'top_right' ,  
		    header : "실내 온습도 그래프",
			classes: 'pill kimtree', 
			config : { 
					version : "6" ,	 
					id : "dM3j6fFnk" , 
					host : "52.231.91.247" , 
					port: 3000,
					dashboardname: "smartmirror_ai_temperature", 
					orgId: 1, 
					panelId: 2,
					width: "100%", 
					height: "100%",
					scrolling: "yes",
					refreshInterval: 900
				}
		}, 
		/*{
	 module: 'MMM-GrafanaGauges',
		 position: 'top_right',   // This can be any of the regions.
		 classes: 'pill kimtree',
         header: 'Test Graph',
		 config: {
					host: "20.196.219.156", //Mandatory. See url when displaying within grafana
					port: 3000, // Mandatory.
					dashboardname: "smartmirror_ai_temperature", // Mandatory.  
					orgId: 1, // Mandatory.
					showIDs: [2],// Mandatory. PanelId from the url.  
					width: "100%", // Optional. Default: 100%
					height: "100%", // Optional. Default: 100%
					refreshInterval: 10 //Optional. Default: 900 = 1/4 hour
				}
},*/
		{
		module: 'MMM-PushBulletNotifications',
		header: 'Notifications',
		classes: "kimtree",
		position: 'top_left',
		config: {
			accessToken: "o.9hehtgGPGqkeVdoa2atfcQVvWEORWjBB",
			endToEndPassword: null,
			numberOfNotifications: 3,
			filterTargetDeviceName: "",
			showPushesSentToAllDevices: true,
			onlyAllowCommandsFromSourceDevices: [],
			fetchLimitPushBullet: 50,
			showPushes: true,
			showPushesOnLoad: true,
			showDismissedPushes: true,
			showMirroredNotifications: true, 
			onlyShowLastNotificationFromApplication: false,
			showIndividualNotifications: false,
			showSMS: true,
			showMessage: true,
			showIcons: true,
			showDateTime: true,
			localesDateTime: 'nl-NL',
			playSoundOnNotificationReceived: true,
			soundFile: 'modules/MMM-PushBulletNotifications/sounds/new-message.mp3',			
			maxMsgCharacters: 50,
			maxHeaderCharacters: 32,
			showModuleIfNoNotifications: true,
			noNotificationsMessage: "새 메세지가 없습니다.",
			debugMode: false,
		}
		},
				{
		module: 'MMM-PushBulletNotifications2',
		header: 'Notifications',
		classes: "pill",
		position: 'top_left',
		config: {
			accessToken: "o.i3i8kgQwwf0cKYF86pUjGUDzojQTmXrc",
			endToEndPassword: null,
			numberOfNotifications: 3,
			filterTargetDeviceName: "",
			showPushesSentToAllDevices: true,
			onlyAllowCommandsFromSourceDevices: [],
			fetchLimitPushBullet: 50,
			showPushes: true,
			showPushesOnLoad: true,
			showDismissedPushes: true,
			showMirroredNotifications: true, 
			onlyShowLastNotificationFromApplication: false,
			showIndividualNotifications: false,
			showSMS: true,
			showMessage: true,
			showIcons: true,
			showDateTime: true,
			localesDateTime: 'nl-NL',
			playSoundOnNotificationReceived: true,
			soundFile: 'modules/MMM-PushBulletNotifications2/sounds/new-message.mp3',			
			maxMsgCharacters: 50,
			maxHeaderCharacters: 32,
			showModuleIfNoNotifications: true,
			noNotificationsMessage: "새 메세지가 없습니다.",
			debugMode: false,
		}
		},
		{
			module: "MMM-MovieListings",
			position: "top_left",
			classes: 'pill kimtree',
			config: {
				apiKey : "e7627842dd1b7a490f26016e1e659316",
				header: "상영중인 영화",
				region : 'KR',
				lanquage : 'ko-KR',
				pageChangeInterval : 10*1000,
				
			}
			},



				{
		module: 'MMM-iFrame',
		position: 'top_right',
		classes:'pill kimtree',
		config: {
				url: ["http://localhost:3000/"],
				updateInterval: 0.5 * 60 * 10000,
				width: "100",
				height: "100",
				frameWidth: "500"
			}
		},
		{
		  module: "MMM-GoogleAssistant",
		  position: "top_left",
		  classes: 'default kimtree pill',
		  configDeepMerge: true,
		  config: {
			assistantConfig: {
			  latitude: 51.508530,
			  longitude: -0.076132,
			},
		  }
		},
		{
		  module: "MMM-Detector",
		  configDeepMerge: true,
		  classes: 'default kimtree pill',
		  config: {
			debug: false,
			autoStart: true,
			micConfig: {
			  recorder: "arecord",
			  device: "plughw:2",
			  audioGain: 2.0,
			  applyFrontend: true,
			},
			detectors: [
			    {
				  detector: "Snowboy",
				  Model: "jarvis",
				  Sensitivity: null,
				  Logo: "google",
				  autoRestart: false,
				  onDetected: {
					notification: "GA_ACTIVATE"
				  }
				}
			
			  

			]
		  }
		}
	

		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
