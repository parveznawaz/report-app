const sql = require("mssql");

const executeQuery = (connectionConfig, query) => {
  return new Promise((resolve, reject) => {
    sql
      .connect(connectionConfig)
      .then(() => {
        var request = new sql.Request();
        request
          .query(query)
          .then(response => {
            resolve(response.recordset);
          })
          .then(() => {
            sql.close();
          })
          .catch(err => {
            console.log("Database error: " + err);
            reject(err);
          });
      })
      .catch(err => {
        console.log("Database error: " + err);
        reject(err);
      });
  });
};

const executeStoreProcedure = (
  connectionConfig,
  storedProcedureName,
  params
) => {  
  return new Promise((resolve, reject) => {
    const connection = new sql.ConnectionPool(connectionConfig);
    connection.connect()    
      .then(pool => {
        var request = new sql.Request(connection);
        params.forEach(param => {
          request.input(param.name,param.value);
        });
        request
          .execute(storedProcedureName)
          .then(response => {
            resolve(response.recordset);
          })
          .then(() => {
            connection.close();
          })
          .catch(err => {
            console.log("Database error: " + err);
            reject(err);
          });
      })
      .catch(err => {
        console.log("Database error: " + err);
        reject(err);
      });
  });
};

module.exports = {
  executeQuery,executeStoreProcedure
};
