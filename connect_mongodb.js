//  mongodb connection string : mongodb://admin:kgk123456@10.100.24.188:27017/test

/*** var oracledb = require('oracledb');
oracledb.getConnection({
    user: 'eistprelive',
    password: 'kgkeisteamt',
    connectString : '(DESCRIPTION = (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 10.20.1.39)(PORT = 1521)) ) (CONNECT_DATA = (SERVICE_NAME = EISALPHADB) ))'
}, function(err, connection){
    if (err)
    {
        console.log('error in db connection', err.message);
        return;
    }

});  ****/



/// connecting to oracle database
/// npm install oracledb

var oracledb = require('oracledb');
oracledb.getConnection({
    user: 'eistprelive',
    password: 'kgkeisteamt',
    connectString: 'EISTESTDBT'
}, function (err, data) {
    if (err) {
        console.log('some error came');
    }
    console.log('connected to db');
    data.execute('select * from v_bi_rm_inventory_limit where rownum<5', function (err, result) {

        if (err) {
            console.error(err.message);
            doRelease(data);
            return;
        }
        console.log(result.metaData);
        console.log(result.rows);
        doRelease(data);
    });
});


function doRelease(data) {
    data.release(function (err) {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('success');
        }
    });
};

/// connect to postgresql database 
// npm install pg
/**var pg = require('pg');
var constring = 'postgres://postgres:kgk123456@localhost:5432/new_test';

var client = new pg.Client(constring);
client.connect( function(err){
    if (err){
        console.error(err.message);
    }
})
var x = 1000;
 
/**while (x>0) {

} **/

/// connecting to mongodb 
/** var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 ongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});  ***/



const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://admin:kgk123456@10.100.24.188:27017/admin')

/// connect to the database
/**client.connect()
    .then(() => {
        console.log('Connected Successfully!');
        
        //Close the database connection
        console.log('Exiting..');
        client.db('test');
        client.close();
    })
    .catch(error => console.log('Failed to connect!', error)); **/


/// insert document in existing db and existing collection
    client.db('test').collection('data_type2').insertOne({
        name: 'Sonali Ranmale',
        age : 23,
        email : 'xyz'
    }).then((res) => {
        console.log(res);
        client.close();
    }
    ).catch((err) => console.log(err))
/**
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://admin:kgk123456@10.100.24.188:27017/";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("Database created!");
      db.close();
    });

**/

/**
 * var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://admin:kgk123456@10.100.24.188:27017/test";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
db.createCollection("employees", function(err, res) {  
if (err) throw err;  
console.log("Collection is created!");  
db.close();  
});  
});  **/