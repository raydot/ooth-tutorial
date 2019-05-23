const { OothClient } = require('ooth-client')

const ooth = new OothClient({
	url: 'http://localhost:3002/auth',
	secondaryAuthMode: 'session', // for cookie based-session, or 'jwt'
	api: { // optional.  Use if you have an api with resources to make authenticated calls to
		url: 'http://localhost:3003'
		primaryAuthMode: 'jwt', // optional, use only if you have to create a new cookie-based sessions
		secondaryAuthMode: 'session', // for cookie-based session
		loginPath: '/login', // Optional, use only if primaryAuthMode is 'jwt'
		logoutPath: '/logout' // Optional, use only if primaryAuthMode is 'jwt'
	},
	ws: true //Optional, subscribes to user changes with websocket.  You need 'oows' for client
})

const user = await ooth.start()

// Get current user status

const status = await ooth.user

// Subscribe to the user status
// To react to changes in user status (login / logout/updates), subscribe like this:

const sub = user => console.log("User is", user)
oothi.on("user", sub)

//to unsubscribe
ooth.unsubscribe("user", sub)

//The way you login depends on the plugins installed.  Here is the general form:
const user = await ooth.authenticate(strategyName, methodName, data)

//logout
await ooth.logout()

