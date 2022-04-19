#!/bin/sh
STR="npm i "
for var in "$@"
do
    STR+="$var "
done

echo "about to run '$STR' inside the container"
echo "make sure you running this script from the root directory by 'bash scripts/npm_install/npm_install.sh <package name> <multiple packages possible>'"

sudo docker build -t npm_installer_image ./scripts/npm_install # build
docker container rm -f npm_installer_container # remove container if allready runing
docker run -it --name npm_installer_container -v "$(pwd)"/:/app/ npm_installer_image bash -c "$STR"
