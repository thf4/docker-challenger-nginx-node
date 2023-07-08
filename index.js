const http = require('http');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: "db",
	user: "root",
	password: "root",
	database: "nodedb"
});

connection.connect();

const sql = "CREATE TABLE people (id int auto_increment primary key, name varchar(30))";
connection.query(sql, function (err, result) {
		if (err) console.log(err);
		console.log("Table created");
});

const createSql = "INSERT INTO people (name) VALUES ('Thales'),('Octavio'),('Uncle Bob'),('Dimitri'),('Martin Fowler'),('Nicolas Cage'),('Batman')";
connection.query(createSql, function (err, result) {
	if (err) console.log(err);
});

let obj;
connection.query("SELECT * FROM people", function (err, result, fields) {
	if (err) console.log(err);
	obj = result
});

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'content-type': 'text/html' })
	if (req.url === '/') {

		res.write('<h1>Full Cycle Rocks!</h1>');
		for (let index = 0; index < obj.length; index++) {
			res.write(`<p>${JSON.stringify(obj[index])}</p>`);
		}
		connection.end();
		res.end()
	} else {
		res.write('<h1>404 Nout Found</h1>')
		res.end()
	}
})

server.listen(process.env.PORT || 3000, () => console.log(`server running on ${server.address().port}`))