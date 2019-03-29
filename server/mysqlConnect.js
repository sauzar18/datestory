import mysql from 'mysql'

const dbConfig = {
  host: 'localhost',
  user: 'xscore',
  password: 'xscore2013',
  database: 'date_db',
  /*
  host: '34.85.117.58',
  user: 'slboy18',
  password: '4KNEiJqtjkGoOcjm',
  socketPath: '/cloudsql/datesplan:asia-northeast1:datedb',
  */
  multipleStatements: true
}
const connection = mysql.createConnection(dbConfig)

export default connection
