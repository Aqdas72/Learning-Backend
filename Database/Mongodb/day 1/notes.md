Q - What is mongodb??
its a NoSQl data base means no structural data
used to store large amount of unstructured data
used for faster and more scalable application 

//* MongoDB is document-oriented 

MySQL vs MongoDB
mysql has a fixed schema and have rows and columns with a table like structure whereas 
In MongoDB there are collections of documents with dynamic schema using JS based Query 


* MongoDB stored data in format called BSON (Binary JSON) - 
* BSON vs JSON
like JSON it support additional datatype like ObjectId and its a binary encoded format for JSON like data

* MongoDB (DataBase --> Collection --> Document --> field)

//* use and create database
use <database_name>;

show dbs or databases;

//* create a collection(its like a table in mysql)
db.createCollection("<collection_name>");

show collections;

//* create documents in a collection - insertOne({}) , insertMany([]) {use array to insert}

db.<collection_name>.insertOne({});

db.<collection_name>.insertMany([]);

//*