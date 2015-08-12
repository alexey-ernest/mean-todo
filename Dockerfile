FROM google/nodejs-runtime
MAINTAINER Alexey Melnikov <alexey.ernest@gmail.com>

# global install gulp
RUN npm install -g gulp

# run gulp default task
RUN gulp