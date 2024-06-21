# pull official base image
FROM node:22.3.0 as dev

# set working directory
WORKDIR /syncmaster_ui

# install app dependencies
RUN npm cache clean --force \
    npm install --global yarn

COPY package*.json .
RUN npm ci
COPY . .
RUN yarn build
CMD [ "yarn", "dev" ]

FROM nginx:stable-alpine as prod
# set working directory
WORKDIR /syncmaster_ui

# install app dependencies
RUN npm cache clean --force \
npm install --global yarn

COPY package*.json .
RUN npm ci
COPY . .
# Replace URL in the prod image
RUN sed -i "s#http://localhost:8000#/#g" /syncmaster_ui/src/shared/api/types.ts
RUN yarn build
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /syncmaster_ui/dist /usr/share/nginx/html

EXPOSE 3000