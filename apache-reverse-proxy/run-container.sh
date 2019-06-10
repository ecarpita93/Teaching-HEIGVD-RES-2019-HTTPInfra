#!/bin/bash

docker run -d -e STATIC_APP=172.17.0.6:80 -e DYNAMIC_APP=172.17.0.4:3000 --name apache_rp -p 8080:80 labo_apache_rp