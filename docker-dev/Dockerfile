FROM ubuntu:xenial

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update
RUN apt-get -y install nodejs npm
RUN npm -g install grunt bower
RUN apt-get -y install ruby-sass git-core
RUN ln -s /usr/bin/nodejs /usr/bin/node
