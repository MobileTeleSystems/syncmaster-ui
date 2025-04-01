# Bulding packages on ARM using emulation is veery slow.
# Use amd64 for building .js and .css (which are platform agnostic),
# and then copy to platform-specific nginx image

FROM --platform=linux/amd64 node:23.10.0 AS build

WORKDIR /app

COPY .yarnrc.yml .yarn package.json yarn.lock ./
RUN yarn install --immutable

COPY . .
RUN yarn build


FROM nginx:stable-alpine AS prod

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 3000
