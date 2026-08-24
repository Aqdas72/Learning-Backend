POST /shorten
      ↓
Client sends long URL
      ↓
Validate URL
      ↓
Generate short ID
      ↓
Store short ID + original URL
      ↓
Return short URL

Then
GET /:shortId
      ↓
Get shortId from req.params
      ↓
Find matching URL
      ↓
res.redirect(originalUrl)

[
  {
    "shortId": "a8K2x",
    "originalUrl": "https://www.example.com/some/very/long/url"
  }
]