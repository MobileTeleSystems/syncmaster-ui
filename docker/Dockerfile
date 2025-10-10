# Bulding packages on ARM using emulation is veery slow.
# Use amd64 for building .js and .css (which are platform agnostic),
# and then copy to platform-specific nginx image

FROM --platform=linux/amd64 node:24.9.0 AS build

WORKDIR /app

COPY .yarnrc.yml ./
COPY .yarn/ ./.yarn/
COPY package.json yarn.lock ./
RUN yarn install --immutable

COPY . .
RUN yarn build


FROM nginx:stable-alpine AS prod

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ARG API_URL=http://localhost:8000
ARG AUTH_PROVIDER=dummyAuthProvider
ENV SYNCMASTER__UI__API_BROWSER_URL=${API_URL}
ENV SYNCMASTER__UI__AUTH_PROVIDER=${AUTH_PROVIDER}

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD ["curl", "-f", "http://localhost:3000/"]
