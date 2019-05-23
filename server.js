const express = require("express")
const app = express

// if the client is going to run on a host other than the ooth server, enable cors
const cors = require("cors")

const corsMiddleware = cors({
	origin: "http://localhost",
	credentials: true,
	preflightContinue: false
})
app.use(corsMiddleware)
app.options(corsMiddleware)

