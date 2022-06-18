#!/bin/sh

cd ../

sudo chown -R $USER:$(id -gn $USER) ./* # this gives the host OS (and by that to the code editor u using) permissions to eddit the content of this folder

sudo docker build . -t microservice_template_dev_initialize.image -f ./Dockerfile.nok8s # build the image and names it 'microservice_template_dev.image'

docker rm -f microservice_template_dev_initialize.container &>/dev/null # remove the container in case its already exist. rm: remove, -f: force - in case the older version of this container is already exist and runing

docker run --rm -it -v ${PWD}:/app microservice_template_dev_initialize.image 'npm i' 

