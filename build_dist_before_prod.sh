
sudo chown -R $USER:$(id -gn $USER) ./* # this gives the host OS (and by that to the code editor u using) permissions to eddit the content of this folder

sudo docker build -t microservice_template_build.image ./development # build the image and names it 'microservice_template_build.image'

docker rm -f microservice_template_build.container &>/dev/null # remove the container in case its already exist. rm: remove, -f: force - in case the older version of this container is already exist and runing

docker run --rm -it -v ${PWD}:/app microservice_template_build.image bash -c 'cd development && npm run build'
# ↑↑ the comments below are for the command above ↑↑#
# docker run : run a container
#  --rm : remove the container after its main proccess have ended.
#  -it: set the stdout and stdin of the container to the shell we used for the run command
#  --name microservice_template_build.container : container's name
#  microservice_template_build.image : the image to run the container from
#  #bash #u can opptionaly specify a 'main' command for the contaienr runtime#  
#  #bash 
#
