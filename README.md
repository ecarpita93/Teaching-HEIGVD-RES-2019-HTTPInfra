# Teaching-HEIGVD-RES-2019-HTTPInfra
Final labo of RES 2019

## Step 1: Static HTTP server with apache httpd

Following the webcast, i was able to reproduce a static server starting using the apache PHP official dockerImage and a custom modified one-page template foundend from the same webcast link.

The dockerfile is the same as the webcast, (just using the latest version of the image). To build and run the image, i provided the repository with two scripts to automatise the same commands used in the webcast. The port mapping is using also the same configuration as the webcast connecting the 9090 port to the 80 of the dockercontainer.

To find the apache config files in a running container use the command docker **-exec it <container_name> /bin/bash** to open a console image and cd to **/etc/apache2** to the apeche folder where we can locate the .conf files.









