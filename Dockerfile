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
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=dev /syncmaster_ui/dist /usr/share/nginx/html

EXPOSE 3000