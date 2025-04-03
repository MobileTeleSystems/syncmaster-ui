#!/bin/sh

cat <<EOF > /usr/share/nginx/html/env-config.js
window.env = {
  API_URL: "${SYNCMASTER__UI__API_BROWSER_URL}",
};
EOF

sed -i '/<\/head>/i \    <script src="/env-config.js"></script>' /usr/share/nginx/html/index.html

exec "$@"