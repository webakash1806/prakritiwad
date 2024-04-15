import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import morgan from 'morgan'
import errorMiddleware from './middlewares/error.middleware.js'
config()

// Creating an instance of the Express application
const app = express()

// Middleware setup to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware setup to parse JSON data from incoming requests
app.use(express.json())

// Middleware setup to parse cookies from incoming requests
app.use(cookieParser())

// Setting up CORS (Cross-Origin Resource Sharing) middleware for Express
// Example usage:
// If the 'FRONTEND_URL' is set to 'https://example.com', then only requests
// originating from 'https://example.com' will be allowed, and credentials will be included.
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}))

// Applying the 'dev' format logging to all routes
app.use(morgan('dev'))

// Middleware setup for handling requests to the '/ping' endpoint
app.use('/ping', function (req, res) {
    // When a request is made to '/ping', respond with the string '/pong'
    res.send('/pong')
})


// This route handler is a catch-all (*) for any request that hasn't been handled by previous routes.
// It responds with a 404 status code and sends a simple 'OOPS! 404 Page not found' message.
app.all('*', (req, res) => {
    res.status(404).send('OOPS! 404 Page not found')
})

/**The 'app.use' function is used to mount middleware in an Express.js application.
   In this case, 'errorMiddleware' is registered as error-handling middleware. */
app.use(errorMiddleware)

export default app