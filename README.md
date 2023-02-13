# user-article-backend

## Notes
### Import "User-Article APIs.postman_collection.json" in Postman to see the documentaion and be able to test the project
### Install MongoDB Compass or MongoDB Atlas with your own connection string modify in ==> "./DB/connection.js"

## Description
### using mongoose & express
1. User model (name, email, age, password )
2. Article model (title, content )

### Auth APIs:
1. sign up
2. sign in

### User APIs:
1. get all users
2. update user
3. delete user 
4. get users with name start with x with age less than y
5. get users with name end with x
6. get users with name contains x
7. get users with name x

Note: (x and y are variables)

### Articles APIs:
1. add article
2. update article (article owner only )
3. delete article ( article owner only)
4. get all articles with their owner's information
5. get article by id


