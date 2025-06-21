const mysql = require('mysql2/promise');

const { Client } = require("pg");

/// Upgraded the database function due to this error on connection to the database: ER_NOT_SUPPORTED_AUTH_MODE : Client does not support authentication protocol requested by server
/// upgraded from mysql to mysql2/promise
/// Replaced the Promise[reject, resolve] with ES6 async/await
module.exports = async function database(database_config) {

  console.log('DB_URI: ', database_config.URI)
	let client = new Client(database_config.URI);

	await client.connect();
	let results
	try {
		if(database_config.values.length){
				results = await client.query(database_config.sql, database_config.values);
		} else {
			results = await client.query(database_config.sql);
		}

		return results.rows

	} catch (err) {
		console.error("error executing query:", err);
		return []
	} finally {
		client.end();
	}
};

