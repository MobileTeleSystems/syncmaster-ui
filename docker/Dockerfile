# Bulding packages on ARM using emulation is veery slow.
# Use amd64 for building .js and .css (which are platform agnostic),
# and then copy to platform-specific nginx image

FROM --platform=linux/amd64 node:25.2.0 AS build

WORKDIR /app

COPY .yarnrc.yml ./
COPY .yarn/ ./.yarn/
COPY package.json yarn.lock ./
RUN yarn install --immutable

COPY . .
RUN yarn build


FROM mikefarah/yq AS yq
FROM nginx:stable-alpine AS prod

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

COPY ./docker/entrypoint.sh /entrypoint.sh
COPY --from=yq /usr/bin/yq /usr/bin/yq
RUN chmod +x /entrypoint.sh /usr/bin/yq

ENV SYNCMASTER_CONFIG_FILE=/app/config.yaml

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD ["curl", "-f", "http://localhost:3000/"]
