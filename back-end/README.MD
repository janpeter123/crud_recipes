# Back-End

# Configuration
All the credentials you will need are configured on the `.env` file

# Available Routes

## [GET] Requests
##### `/get_recipes` - Get recipes data to display on the front-end cards

Example:

`[GET]` request to `http://localhost:5001/get_recipes`

Expected response:

If everything works correctly you will need to acces the `response.body` to display the data on the home page.

To display the image correctly you need to have a firebase token
```
{
    "body": [
        {
            "_id": "6226535bfae9d040fca5734f",
            "author": "Jan Peter Merkel",
            "recipe_name": "Normal White Rice",
            "prepare_time": 30,
            "prepare_time_unit": "Minutes",
            "main_photo": "https://firebasestorage...photo.jpeg?alt=media&token=",
            "reviews": ["5","4",...]
        },
        .
        .
        .
    ]
}
```
