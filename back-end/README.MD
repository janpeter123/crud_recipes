# Back-End

# Configuration
1. All the credentials you will need are configured on the `.env` file
2. To install all dependencies run `npm i`
3. If you want to run on development mode run `npm run dev`.


# Available Routes

## [GET] Routes

##### `/get_catalog` - Get recipes data to display on the front-end cards

Example:

`[GET]` request to `http://localhost:5001/get_recipes`

Expected response:

If everything works correctly you will need to acces the `response.body` to display the data on the home page.

```
{
    "body": [
        {
            "_id": "6226535bfae9d040fca5734f",
            "author": "Jan Peter Merkel",
            "recipe_name": "Normal White Rice",
            "prepare_time": 30,
            "prepare_time_unit": "Minutes",
            "main_photo": "https://firebasestorage...photo.jpeg?alt=media",
            "reviews": ["5","4",...]
        },
        .
        .
        .
    ]
}
```

##### `/get_recipe` - Gets a specific recipe based on ID

Example:

`[GET]` request to `http://localhost:5001/get_recipe/?id=6226535bfae9d040fca5734f`



Expected response:

```
{
    "body": {
        "_id": "6226535bfae9d040fca5734f",
        "author": "Jan Peter Merkel",
        "recipe_name": "Arroz Branco Normal",
        "date": "07/03/2022",
        "country": "Brazil",
        "prepare_time": 30,
        "prepare_time_unit": "Minutes",
        "video_link": "https://www.youtube.com/embed/gRTWL39lUtQ",
        "main_photo": "https://firebasestorage.googleapis.com/v0/b/crud-recipes.appspot.com/o/arroz-branco.jpeg?alt=media\n",
        "ingredients_list": [
            {
                "name": "alho",
                "measurement_unit": "dentes",
                "quantity": "2"
            },
                ...
        ],
        "description": [
            {
                "text": "Lave bem o arroz e coloque a água para ferver em uma panela separada."
            },
          ...
        ],
        "reviews": 5,
        "review_count": 3,
        "category_id": "6234b6d31eaa1c44e782f1ca"
    }
}
```

##### `/get_categories` - Gets all food categories available

Example:

`[GET]` request to `http://localhost:5001/get_categories`



Expected response:

```
 "body": [
        {
            "_id": "6234b6d31eaa1c44e782f1ca",
            "main_photo": "https://firebasestorage.googleapis.com/v0/b/crud-recipes.appspot.com/o/categories%2Fmain-course.jpg?alt=media",
            "name": "Main Courses"
        },
        {
            "_id": "6234b6d31eaa1c44e782f1cb",
            "main_photo": "https://firebasestorage.googleapis.com/v0/b/crud-recipes.appspot.com/o/categories%2Fstarters.jpg?alt=media",
            "name": "Starters"
        }...
```

##### `/get_measurement_units` - Gets all food measurement units available

Example:

`[GET]` request to `http://localhost:5001/get_measurement_units`

Expected response:

```
"body": [
        {
            "_id": "623e2c495d70df17b534d875",
            "value": "xicaras",
            "description": "xicaras"
        },
        {
            "_id": "623e2c495d70df17b534d876",
            "value": "colheres de sopa",
            "description": "colheres de sopa"
        },
        {
            "_id": "623e2c495d70df17b534d877",
            "value": "colheres de cha",
            "description": "colheres de chá"
        },
        ...
```

##### `/get_countries` - Gets all countries available

Example:

`[GET]` request to `http://localhost:5001/get_countries`

Expected response:

```
    "body": [
        {
            "_id": "623e2c9e5d70df17b534d885",
            "label": "Brazil"
        },
        {
            "_id": "623e2c9e5d70df17b534d886",
            "label": "Germany"
        }
        ...
```

## [POST] Routes

##### `/create_recipe` - Creates a new recipe

Expected request body:

```
{
    "author":"John Doe",
    "recipe_name": "French Fries Test",
    "prepare_time": 45,
    "prepare_time_unit": "Minutes",
    "main_photo": "https://www.thespruceeats.com/thmb/IHKuXcx3uUI1IWkM_cnnQdFH-zQ=/3485x2323/filters:fill(auto,1)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg",
    "video_link": "https://www.youtube.com/watch?v=WaN1mrGvcEU",
    "ingredients_list": [
        {
            "name": "Potatos",
            "quantity": "1",
            "measurement_unit": "kilos"
        },
        {
            "name": "sal",
            "quantity": "300",
            "measurement_unit": "grams"
        },
        {
            "name": "óleo",
            "quantity": "500",
            "measurement_unit": "ml"
        }
    ],
    "description": [
        {"text":"cut the potato into small pieces"},
        {"text":"put it in a pan with oil"},
        {"text":"after frying it, just add salt."}
    ]
}
```

Expected Response:

`HTTP Code 201 - Created` and your recipe.

##### `/login` - Logs a user into the platform

Expected request body:

```
{
    "username": "admin",
    "password": "admin"
}
```

Expected response:

In case you logged in correctly:
`HTTP Code 200 - OK` and `Successfully Authenticated`

## [PATCH] Routes

##### `/update_recipe` - Updates the review of a recipe

Expected request body:

Here we're going to update the review of a recipe and the review count of it.
On the front end, we will take the average bewteen the old review and the new review and update id.
The review_count is updated one by one on the Front-End.

```
{
    "id": "6226535bfae9d040fca5734f",
    "new_review": 5,
    "new_review_count": 3
}
```
Expected response:

`HTTP Code 200 - OK`
