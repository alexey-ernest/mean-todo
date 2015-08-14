FROM google/nodejs-runtime
MAINTAINER Alexey Melnikov <alexey.ernest@gmail.com>

# gulp
RUN npm install -g gulp
RUN gulp

# prepare env vars
RUN chmod +x ./env.sh
ENTRYPOINT ["./env.sh"]