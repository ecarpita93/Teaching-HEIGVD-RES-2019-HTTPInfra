#!/bin/bash
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)

cd express-image
./build-image.sh
./run-container.sh
./run-container.sh
./run-container-name.sh

cd ../apache-php-image
./build-image.sh
./run-container.sh
./run-container-name.sh
