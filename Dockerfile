FROM google/nodejs-runtime
MAINTAINER Alexey Melnikov <alexey.ernest@gmail.com>

# global install gulp
RUN npm install -g gulp

# run gulp default task
RUN gulp

# build mongo connection for linked container
ENV MONGO_CONNECTION mongo://$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/todo