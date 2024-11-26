#!/bin/sh

cat <<EOF > /usr/share/nginx/html/env-config.js
window.env = {
  API_URL: "${API_URL}",
};
EOF

exec "$@"