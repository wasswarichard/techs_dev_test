Running the application
====
1. Install nodejs on your machine
2. run install npm and run npm i to install the dependencies
2. Then run node index.js
3. The server should be running on the local machine with port 3000.
   Results:
   1. Get Count the number of unique recipe name
       API:  http://localhost:3000/api/unique/recipe/count
       Expected Output : ```json5
                             {
                                 "unique_recipe_count": 30
                             }
                         ```
   2. Count the number of occurences for each unique recipe name.
       API:  http://localhost:3000/api/count/per/recipe
       Expected Output : ```json5
                             {
                               "count_per_recipe": [
                                 {
                                   "recipe": "Creamy Dill Chicken",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Speedy Steak Fajitas",
                                   "count": 6
                                 },
                                 {
                                   "recipe": "Cherry Balsamic Pork Chops",
                                   "count": 3
                                 },
                                 {
                                   "recipe": "Hot Honey Barbecue Chicken Legs",
                                   "count": 3
                                 },
                                 {
                                   "recipe": "Tex-Mex Tilapia",
                                   "count": 1
                                 },
                                 {
                                   "recipe": "One-Pan Orzo Italiano",
                                   "count": 2
                                 },
                                 {
                                   "recipe": "Chicken Sausage Pizzas",
                                   "count": 5
                                 },
                                 {
                                   "recipe": "Spanish One-Pan Chicken",
                                   "count": 3
                                 },
                                 {
                                   "recipe": "Grilled Cheese and Veggie Jumble",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Melty Monterey Jack Burgers",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Korean-Style Chicken Thighs",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Spinach Artichoke Pasta Bake",
                                   "count": 8
                                 },
                                 {
                                   "recipe": "Garden Quesadillas",
                                   "count": 2
                                 },
                                 {
                                   "recipe": "Garlic Herb Butter Steak",
                                   "count": 3
                                 },
                                 {
                                   "recipe": "Mediterranean Baked Veggies",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Parmesan-Crusted Pork Tenderloin",
                                   "count": 3
                                 },
                                 {
                                   "recipe": "Steakhouse-Style New York Strip",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Chicken Pineapple Qwzza",
                                   "count": 1
                                 },
                                 {
                                   "recipe": "Yellow Squash Flatbreads",
                                   "count": 5
                                 },
                                 {
                                   "recipe": "Cajun-Spiced Pulled Pork",
                                   "count": 5
                                 },
                                 {
                                   "recipe": "Sweet Apple Pork Tenderloin",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Meatloaf à La Mom",
                                   "count": 3
                                 },
                                 {
                                   "recipe": "Chicken Pineapple Quesadillas",
                                   "count": 1
                                 },
                                 {
                                   "recipe": "Honey Sesame Chicken",
                                   "count": 3
                                 },
                                 {
                                   "recipe": "Creamy Shrimp Tagliatelle",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Hearty Pork Chili",
                                   "count": 4
                                 },
                                 {
                                   "recipe": "Stovetop Mac 'N' Cheese",
                                   "count": 1
                                 },
                                 {
                                   "recipe": "Cheesy Chicken Enchilada Bake",
                                   "count": 2
                                 },
                                 {
                                   "recipe": "Mole-Spiced Beef Tacos",
                                   "count": 3
                                 },
                                 {
                                   "recipe": "One-Pan Orzo Italianxxx",
                                   "count": 1
                                 }
                               ]
                             }
                         ```
   3.  Find the postcode with most delivered recipes.
            API : http://localhost:3000/api/busiest/postcode
            Expected Output : ```json5
                                  {"busiest_postcode":{"postcode":["10216"],"delivery_count":5}}
                              ```
   
   4.   List the recipe names (alphabetically ordered) that contain in their name one of the following words: Potato, Veggie , Mushroom
            Example
            API : http://localhost:3000/api/match/name/veggie
            Expected Output : ```json5
                                  ["Grilled Cheese and Veggie Jumble","Mediterranean Baked Veggies","Mediterranean Baked Veggies","Mediterranean Baked Veggies","Grilled Cheese and Veggie Jumble","Grilled Cheese and Veggie Jumble","Grilled Cheese and Veggie Jumble","Mediterranean Baked Veggies","Grilled Cheese and Veggie Jumble","Mediterranean Baked Veggies","Mediterranean Baked Veggies","Mediterranean Baked Veggies","Grilled Cheese and Veggie Jumble","Grilled Cheese and Veggie Jumble","Grilled Cheese and Veggie Jumble","Mediterranean Baked Veggies"]
                              ```
Small Stats API
====

In the given assignment we suggest you to process an automatically generated JSON file with some data and calculated some stats.

Instructions
-----

1. Clone this repository.
2. Create a new branch called `true_dev`.
3. Create a pull request from your `true_dev` branch to the master branch.
4. Reply to the thread you're having with our HR department telling them we can start reviewing your code

Given
-----

Json data found in this repo.

Functional Requirements
------

1. Count the number of unique recipe names.
2. Count the number of occurences for each unique recipe name (alphabetically ordered by recipe name).
3. Find the postcode with most delivered recipes.
4. List the recipe names (alphabetically ordered) that contain in their name one of the following words:
    - Potato
    - Veggie
    - Mushroom

Non-functional Requirements
--------

1. The application is packaged with [Docker](https://www.docker.com/).
2. Setup scripts are provided.
3. The submission is provided web `API`. Functional requirements are presented querable endpoints. 
4. It should be possible to (implementation is up to you):  
    a. provide a custom fixtures file as input  
    b. provide custom recipe names to search by (functional reqs. 4)  

Expected output
---------------

Generate a JSON file of the following format:

1. 
```json5
    {
        "unique_recipe_count": 15
    }
```
2.
```json5
{
    "count_per_recipe": [
        {
            "recipe": "Mediterranean Baked Veggies",
            "count": 1
        },
        {
            "recipe": "Speedy Steak Fajitas",
            "count": 1
        },
        {
            "recipe": "Tex-Mex Tilapia",
            "count": 3
        }
    ]
}
```
3. 
```json5
    "busiest_postcode": {
        "postcode": "10120",
        "delivery_count": 1000
    }
```
4.
```json5
    "match_by_name": [
        "Mediterranean Baked Veggies", "Speedy Steak Fajitas", "Tex-Mex Tilapia"
    ]
}
```

Review Criteria
---

We expect that the assignment will not take more than 2-3 hours of work. In our judgement we rely on common sense
and do not expect production ready code. We are rather instrested in your problem solving skills and command of the programming language that you chose.

It worth mentioning that we will be testing your submission against different input data sets.

__General criteria from most important to less important__:

1. Functional and non-functional requirements are met.
2. Prefer application efficiency over code organisation complexity.
3. Code is readable and comprehensible. Setup instructions and run instructions are provided.
4. Tests showcased are a plus (_no need to cover everything_).
5. Supporting notes on taken decisions and further clarifications are welcome.
6. Avoid use of web frameworks. 
