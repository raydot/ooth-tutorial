const { Ooth } = require('ooth')
const ooth = new Ooth({
	app, //required
	backend, //required
	path: '/auth', //optional, default '/'
	sessionSecret: SESSION_SECRET, // optional, will set up cookie-based sessions.  Can be any long string
	defaultLanguage: 'en', // optional
	translations: {...} //optional, use to authoride ooth texts
})

// <- register plugins here

// if you want to use ooth-client you will need ooth-user to inject the user object in the response
 const oostUser = require("ooth-user").default

 oothUser({ ooth })

 //start the applicataion
 app.listen(3000, () => {
 	console.log("Backend online!")
 })