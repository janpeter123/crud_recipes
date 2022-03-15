# C.R.U.D Recipes
This is an entire recipe website planned by myself.
I am planning to use everything that I've learned working on this repo.

## MongoDB schemas
<img src="./readme_images/Recipe_schema.png" width=200/>

note: this is the basic database schema, the final one can suffer alterations and it's alterations will be documented here.

## Business Rules
  Here you can find the rules of the database relations just in case it isn't very clear.
   - A recipe should have one category. But a category can be in many recipes. We can also have a category that don't have any recipe yet.
   - A recipe should be made by one and only one user. A user can write zero or many recipes.
   - A recipe should have a difficulty and a difficulty can be used in zero or many recipes.
   - The recipe should have at least one ingredient. An ingredient can be present in zero or many recipes.
   - A recipe can have an origin country and an origin country can have zero or many recipes.


## Front end directory Structure (wraped up)
```
├── README.md
├── front-end
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
|   |        ├── assets
|   |        ├── favicon.ico
|   |        ├── index.html
|   |        ├── manifest.json
|   |        └── robots.txt
│   └── src
|         ├── App.js
|         ├── components
|         └── styles
|
└── readme_images
    └── database-schema.png
```

Directory/File | Description
--- |---
front-end | everything related to the front-end.
README.MD | Another Readme documenting how to run the front-end.
node_modules | Dependencies
package-lock | Dependencies
package.json | Dependencies
public | Folder with images used in the front, such as icons, test images...
src | Developed App
App.js | What will be rendered on the main page
components | Components used, such as navbar, cards. It's like a toolbox
styles | Components Stylization
