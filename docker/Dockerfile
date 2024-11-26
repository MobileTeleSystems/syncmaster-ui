FROM node:23.1.0 AS build

WORKDIR /app

COPY .yarnrc.yml .
COPY .yarn ./.yarn

COPY package.json yarn.lock ./
RUN yarn install --immutable

COPY . .
RUN yarn build


FROM nginx:stable AS prod

WORKDIR /usr/share/nginx/html

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist .

COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
