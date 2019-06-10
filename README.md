# Teaching-HEIGVD-RES-2019-HTTPInfra
Final labo of RES 2019

## Step 1: Static HTTP server with apache httpd

Following the webcast, i was able to reproduce a static server starting using the apache PHP official dockerImage and a custom modified one-page template foundend from the same webcast link.

The dockerfile is the same as the webcast, (just using the latest version of the image). To build and run the image , i provided the repository with two scripts to automatise the same commands used in the webcast: **run_container.sh** and **build_image.sh**. The port mapping is using also the same configuration as the webcast connecting the 9090 port to the 80 of the dockercontainer.

To find the apache config files in a running container use the command docker **-exec it <container_name> /bin/bash** to open a console image and cd to **/etc/apache2** to the apeche folder where we can locate the .conf files.

## Step 2: Dynamic HTTP server with express.js

Following the webcast, i was able to reproduce a dynamic server that will reply with list of random animals created with chance module to every **GET / HTTP/1.1** command.

You can also create specific only type of animals using the commands:

**GET /zoo HTTP/1.1**    to obtain zoo animals

**GET /farm HTTP/1.1**   to obtain farm animals

**GET /pet HTTP/1.1**    to obtain pet animals

The dockerfile is the same as the webcast, (this time using the exacty same version of the image). To build and run the image, i provided the repository with two scripts to automatise the same commands used in the webcast and one more to have a interactive shell with the dockerfile, if needed to explore: **run_container.sh**, **build_image.sh** and **run_container_it.sh**. The port mapping connection is 9090 main port to the 3000 of the dockercontainer.







