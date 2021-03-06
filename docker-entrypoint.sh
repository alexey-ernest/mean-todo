#!/bin/bash
set -e

# set env variables
if [ -n "$MONGO_PORT_27017_TCP_ADDR" ] && [ -n "$MONGO_PORT_27017_TCP_PORT" ]; then
  export MONGO_CONNECTION="mongodb://${MONGO_PORT_27017_TCP_ADDR}:${MONGO_PORT_27017_TCP_PORT}/todo"
fi

echo "USING MONGO CONNECTION: ${MONGO_CONNECTION}"

# execute nodejs application
exec /nodejs/bin/npm start