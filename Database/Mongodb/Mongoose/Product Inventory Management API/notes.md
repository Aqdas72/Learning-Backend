Build a backend where a shop can manage its products. Use:

* Model structure:
```javascript
{
    name: String,
    description: String,
    category: String,
    price: Number,
    stock: Number,
    brand: String,
    rating: Number,
    tags: [String],
    isAvailable: Boolean
}
```

* CRUD operations:

| Method   | Endpoint            | Purpose          |
| -------- | ------------------- | ---------------- |
| `POST`   | `/api/products`     | Create product   |
| `GET`    | `/api/products`     | Get all products |
| `GET`    | `/api/products/:id` | Get one product  |
| `PUT`    | `/api/products/:id` | Update product   |
| `DELETE` | `/api/products/:id` | Delete product   |


Example of a product document:
```javascript
{
    name: "iPhone 13",
    description: "The latest iPhone model with advanced features.",
    category: "Electronics",
    price: 999.99,
    stock: 50,
    brand: "Apple",
    rating: 4.8,
    tags: ["smartphone", "apple", "ios"],
    isAvailable: true
}
{
    "name": "Galaxy S23",
    "description": "Samsung flagship smartphone",
    "category": "Electronics",
    "price": 49999,
    "stock": 15,
    "brand": "Samsung",
    "rating": 4.5,
    "tags": ["smartphone", "android", "samsung"]
}
```