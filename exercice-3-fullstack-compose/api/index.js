import express from 'express'
import pkg from 'pg'

const { Pool } = pkg
const app = express()

const port = 3000
const {
  DB_HOST = 'db',
  DB_PORT = '5432',
  DB_USER = 'admin',
  DB_PASSWORD = 'secret',
  DB_NAME = 'myapp',
} = process.env

const pool = new Pool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

app.get('/api/health', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS now')
    res.json({
      status: 'ok',
      service: 'api',
      database: DB_NAME,
      timestamp: result.rows[0].now,
    })
  }
  catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    })
  }
})

app.get('/api/message', (_req, res) => {
  res.json({
    title: 'TP Docker Compose',
    message: 'Le front passe par Nginx, puis l API joint PostgreSQL sur le reseau backend.',
  })
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
