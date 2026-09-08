/**
 * 
//? Level 1: Basic filters

Find all products whose type is "fruit".✅
db.products.find({type:"fruit"});

Find all products whose price is greater than 20.✅
db.products.find({price:{$gt:20}});

Find all products whose rating is exactly 5.✅
db.products.find({rating:{$eq:5}})

Find all products whose price is less than 15.✅
db.products.find({price:{$lt:15}})

Find all products whose price is greater than or equal to 25.✅
db.products.find({price:{$gte:25}})

//? Level 2: $in, $nin, $ne

Find products whose type is either "fruit" or "dairy".✅
db.products.find({type:{$in:["fruit","dairy"]}});

Find products whose type is neither "fruit" nor "vegetable".✅
db.products.find({type:{$nin:["fruit","vegetable"]}});

Find products whose price is not equal to 20.31.✅
db.products.find({price:{$ne:20.31}})

Find products whose rating is either 1 or 5.✅
db.products.find({rating:{$in:[1,5]}})

Find products whose type is not "bakery".✅
db.products.find({type:{$ne:"bakery"}});

//? Level 3: $and, $or, $nor

Find products whose type is "fruit" and price is less than 20.✅
db.products.find({type:"fruit",price:{$lt:20}});

Find products whose type is "bakery" or price is greater than 25.✅
db.products.find({$or:[{type:"bakery"},{price:{$gt:25}}]});

Find products whose type is neither "fruit" nor "vegetable", and price is less than or equal to 20.✅
db.products.find({$nor:[{type:{$in:["fruit","vegetable"]}}],price:{$lte:20}})

Find products whose type is "fruit" or "vegetable", and rating is greater than or equal to 4.✅
db.products.find({$or:[{type:{$in:["fruit","vegetable"]}}],rating:{$gte:4}})

Find products that are not "fruit" and whose price is not greater than 20.✅
db.products.find({$nor:[{type:"fruit"},{price:{$gt:20}}]})

//? Level 4: Cursor methods

Find all fruit products and count them.✅
db.products.find({type:"fruit"}).count()

Find the first 5 products sorted by price in ascending order.✅
db.products.find().sort({price:1}).limit(5);

Find the 3 most expensive products.✅
db.products.find().sort({price:-1}).limit(3)

Find bakery products, skip the first 2, and return the next 3.✅
db.products.find({type:"bakery"}).skip(2).limit(3);

Find fruit products, sort by rating in descending order, skip the first 2, and return the next 5.✅
db.products.find({type:"fruit"}).sort({rating:-1}).skip(2).limit(5);

//? Level 5: Challenge

Find products whose type is "fruit" or "vegetable", price is less than 20, and rating is at least 4. Return only the count.✅
db.products.find({type:{$in:["fruit","vegetable"]},price:{$lt:20},rating:{$gte:4}}).count();

Find products whose type is neither "fruit" nor "vegetable", price is greater than 15 but less than 25, and sort them by price in descending order.✅
db.products.find({type:{$nin:["fruit","vegetable"]},$and:[{price:{$gt:15}},{price:{$lt:25}}]}).sort({price:-1})

//* Find products whose title contains "strawberry" (case-insensitive).✅
//* db.products.find({title:{$regex:"strawberry",$options:"i"}});

Find products where the description field exists.✅
db.products.find({description:{$exists:true}});

Find products where the price field is of BSON type "double"✅
db.products.find({price:{$type:"double"}});
*/
