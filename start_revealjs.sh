#!/bin/sh
TOOLSET_HOST="http://localhost:8080"
PROJECT_DIR_BASE="$HOME/reveal-js-pres"
PROJECT_DIR="$PROJECT_DIR_BASE"
PROJECT_DIR_COUNTER=0
while [[ -d "$PROJECT_DIR" ]] ; do
    PROJECT_DIR_COUNTER=`expr $PROJECT_DIR_COUNTER + 1`
    PROJECT_DIR="$PROJECT_DIR_BASE-$PROJECT_DIR_COUNTER"
done
mkdir $PROJECT_DIR && cd $PROJECT_DIR

curl $TOOLSET_HOST/static/downloads/pres-base-0.1/pres.tar | tar xv

docker run -p 8000:8000 -p 35729:35729 -v $(pwd)/pres/:/revealjs/pres/:ro containersol/pres-base:0.1