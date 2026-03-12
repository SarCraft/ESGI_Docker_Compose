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
  NODE_ENV = 'development',
} = process.env

const pool = new Pool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

app.get('/', (_req, res) => {
  res.json({
    service: 'tp-compose-ex2-api',
    environment: NODE_ENV,
    database: {
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      name: DB_NAME,
    },
  })
})

app.get('/health', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS now')
    res.json({
      status: 'ok',
      database: 'connected',
      timestamp: result.rows[0].now,
    })
  }
  catch (error) {
    res.status(500).json({
      status: 'error',
      database: 'unreachable',
      message: error.message,
    })
  }
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
