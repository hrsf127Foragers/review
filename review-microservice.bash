# build the image
docker build -t review .

# build the image for the proxy
docker build -t charlie_proxy .

# spun the microservice -- create the yelp_review conatiner
docker run -d -p 3001:3001 -v $(pwd):/src/app --name yelp_review review

# spun the proxy service -- create the proxy container
docker run -d -p 8000:8000 -v $(pwd):/src/app --name yelp_proxy charlie_proxy

# create a network with default bridge
 docker network create review-app

# start mySQL container and start the network
docker run -d --network review-app --network-alias mysql -v review-data:/var/lib/mysql -v $(pwd)/db:/docker-entrypoint-initdb.d -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=reviews mysql:5.7

# to make this work with your mysql connection, you will have to change the configuration setting on the microservice on host to the network alias "mysql"

# check if the container is successfully created
# > docker ps
  # output:
  # 56a12a52bad0   mysql:5.7   "docker-entrypoint.s…"   13 seconds ago      Up 12 seconds       3306/tcp, 33060/tcp    busy_chatterjee

# to confirm the database up and running and to verify the schema, run:
# > docker exec -it busy_chatterjee bash
  # log into mysql: mysql -u root -p (inspect the database and tables. NOTE: at this point the data should not be populated yet)

# to inspect the volume of the volume, run:
# > docker volume inspect <volume_name> (review-data)

# Next, create the container for the mySQL to go populate the database
docker run -dp 3001:3001 -v $(pwd):/src/app --network review-app -e MYSQL_HOST=mysql -e MYSQL_USER=root -e MYSQL_PASSWORD=password -e MYSQL_DB=reviews --name review_vol2 review

# to check if the container is created with all its resource, run
# > docker exec -it <container_name> (review_vol2) sh
# to populate the database, run
# > node server/helper/populate.js

# go back to check the database to see if the data is stored
# > docker exec -it <container_name_mysql:5.7> (busy_chatterjee) bash

# to use the docker-compose you have to set a delay on the node server with: Node server/index.js  => Sleep 20 && server/index.js
