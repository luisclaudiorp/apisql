const sql = require('mssql/msnodesqlv8')

const config = {
    server : 'DESKTOP-E365GOC',
    Database: 'SecullumClubeNet',
    driver : 'msnodesqlv8',
    user : 'sa',
    password : '_43690',
    options : {
        trustedConnection: true
      } 
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connect to MSSQL')
        return pool
    }).catch(err => console.log('Database Connection Failed! Bad Config ', err))

module.exports = {
    sql, poolPromise
}