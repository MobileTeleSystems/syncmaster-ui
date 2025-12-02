#!/bin/sh

SYNCMASTER_CONFIG_FILE=${SYNCMASTER_CONFIG_FILE:-/app/config.yml}
SYNCMASTER__UI__API_BROWSER_URL_DEFAULT="http://localhost:8000"
SYNCMASTER__UI__AUTH_PROVIDER_DEFAULT="dummyAuthProvider"

if [[ -z "${SYNCMASTER__UI__API_BROWSER_URL}" ]]; then
  if [[ -f "${SYNCMASTER_CONFIG_FILE}" ]]; then
    SYNCMASTER__UI__API_BROWSER_URL=$(yq ".ui.api_browser_url // \"${SYNCMASTER__UI__API_BROWSER_URL_DEFAULT}\"" "${SYNCMASTER_CONFIG_FILE}")
  else
    SYNCMASTER__UI__API_BROWSER_URL="$SYNCMASTER__UI__API_BROWSER_URL_DEFAULT"
  fi
fi

if [[ -z "${SYNCMASTER__UI__AUTH_PROVIDER}" ]]; then
  if [[ -f "${SYNCMASTER_CONFIG_FILE}" ]]; then
    SYNCMASTER__UI__AUTH_PROVIDER=$(yq ".ui.auth_provider // \"${SYNCMASTER__UI__AUTH_PROVIDER_DEFAULT}\"" "${SYNCMASTER_CONFIG_FILE}")
  else
    SYNCMASTER__UI__AUTH_PROVIDER="$SYNCMASTER__UI__AUTH_PROVIDER_DEFAULT"
  fi
fi

cat <<EOF > /usr/share/nginx/html/env-config.js
window.env = {
  API_URL: "${SYNCMASTER__UI__API_BROWSER_URL}",
  AUTH_PROVIDER: "${SYNCMASTER__UI__AUTH_PROVIDER}",
};
EOF

sed -i '/<\/head>/i \    <script src="/env-config.js"></script>' /usr/share/nginx/html/index.html

exec "$@"
