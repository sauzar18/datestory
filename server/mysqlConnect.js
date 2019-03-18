import mysql from 'mysql'

const dbConfig = {
  host: 'localhost',
  user: 'xscore',
  database: 'date_db',
  // host: '35.194.118.20',
  // user: 'medee',
  password: 'xscore2013',
  // database: 'medee',
  // socketPath: '/cloudsql/medeetest:asia-northeast1:test',
  multipleStatements: true
}
const connection = mysql.createConnection(dbConfig)

export default connection
