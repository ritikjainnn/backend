import cors from 'cors'
import connectDB from './db/connection.js';
import dotenv from "dotenv"
import {app} from './app.js'
dotenv.config({
	path: './.env'
})

console.log(process.env.PORT);

connectDB()
.then(() => {
	app.listen(process.env.PORT, () => {
		console.log("Running on " + process.env.PORT);
	})
})
.catch(() => {

})



app.post('/api/add', function (req, res) {
	res.send('Hello World')
})

app.put('/api/update', function (req, res) {
	res.send('Hello World')
})

app.get('/api/count', function (req, res) {
	res.send('Hello World')
})

app.options('*', cors())