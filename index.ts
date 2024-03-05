import express from 'express'
import db from './models'

const app = express()
const port = process.env.PORT || 9000

// db.sequelize.sync().then(() => {
//   app.listen(port,()=> console.log(`Server running on ${port}`))
// })