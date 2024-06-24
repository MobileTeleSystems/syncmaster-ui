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
ARG API_URL
RUN sed -i "s#http://localhost:8000#${API_URL}#g" /syncmaster_ui/src/shared/api/utils.tsx
RUN yarn build
CMD [ "yarn", "dev" ]

FROM nginx:stable-alpine as prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=dev /syncmaster_ui/dist /usr/share/nginx/html

EXPOSE 3000