mongoimport --db video --collection comments --file day-3\video.json --jsonArray
```.

- `--db shop`: Specifies the database name as "shop".
- `--collection products`: Specifies the collection name as "products".
- `--file products.json`: Specifies the input file as "products.json".

### Handling Array of Objects:

If your JSON file contains an array of objects, you should use the `--jsonArray` flag. This is necessary to inform `mongoimport` that the input file contains an array.

```sh
mongoimport --db shop --collection products --file products.json --jsonArray