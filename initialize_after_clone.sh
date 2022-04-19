
sudo chown -R $USER:$(id -gn $USER) ./* # this gives the host OS (and by that to the code editor u using) permissions to eddit the content of this folder

sudo docker build -t microservice_template_dev.image ./development # build the image and names it 'microservice_template_dev.image'

docker rm -f microservice_template_dev.container &>/dev/null # remove the container in case its already exist. rm: remove, -f: force - in case the older version of this container is already exist and runing

docker run -it -v ${PWD}:/app microservice_template_dev.image bash -c 'cd development && npm i' 
# ↑↑ the comments below are for the command above ↑↑#
#  docker run -itd : run the container seperatly from the cli. if the cli is closed the container keep on runing
#  --name microservice_template_dev.container : container's name
#  -p 30001:3000 : connect host's port 30001 to container's port 3000 (-p <host port>:<container port>)
#  -v ${PWD}:/app : mount the current directory (the one considerd as pwd when runing this command) into the container app folder
#  microservice_template_dev.image : the image to run the container from


#  #bash #u can opptionaly specify a 'main' command for the contaienr runtime#  
#  #bash 

