# Hack Reactor 127 FEC -- 2020

# This repo is a mockup of "Yelp" item list page
### The repo mainly concentrate on the front end development but it is a full stack component rendering sample data stored in mySQL.

## Framework require
### Server:
```I will be using expressJS because it provides built-in middleware that does the heavy lifting such as serving static files and managing route.```

### Database:
```I will be using MySQL as a database because this component does require a relational reference.```

#### Fron-end:
```I will be using webpack as my transpiler for jsx component written in react since we each time member will be building a subset of the item page. Later on, when we try to put all the pieces together, it will be easier.```

###### Asset compilation + loading
```Webpack\nWebpack-dev```


## Startup Instructions

### To compile your react files using webpack

```#!/bin/bash
npm run react-dev
```

### To start the app with a node server

```#!/bin/bash
npm start
npm run createDB
npm run seedData
```
