FROM google/nodejs
MAINTAINER Alexey Melnikov <alexey.ernest@gmail.com>

WORKDIR /app
ONBUILD ADD package.json /app/
ONBUILD RUN npm install
ONBUILD ADD . /app
ONBUILD RUN gulp

EXPOSE 8080
CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]