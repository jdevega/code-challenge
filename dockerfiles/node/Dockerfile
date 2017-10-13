FROM node:8

# Install nodemon
RUN npm i -g nodemon yarn

# Use changes to package.json to force Docker to NOT use cache
COPY package.json /tmp/package.json
RUN cd /tmp && yarn install

# Move installed packages to the app folder
RUN mkdir -p /var/app && cp -a /tmp/node_modules /var/app/

WORKDIR /var/app
# EXPOSE 3000