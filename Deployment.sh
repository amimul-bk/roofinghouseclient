#!/bin/bash

REMOTE_USER="ultimates"
REMOTE_HOST="72.167.150.246"
REMOTE_BUILD_DIR="build"
REMOTE_WEB_DIR="/var/www/html"
PASSWORD='rF$!@9KPIU5b'

echo "🔍 Local files to upload:"
find build/ -type f

echo "📤 Uploading build files to remote server..."
sshpass -p "$PASSWORD" scp -r build/* "${REMOTE_USER}@${REMOTE_HOST}:/home/${REMOTE_USER}/${REMOTE_BUILD_DIR}/"

echo "📁 Remote files uploaded:"
sshpass -p "$PASSWORD" ssh "${REMOTE_USER}@${REMOTE_HOST}" "ls -l /home/${REMOTE_USER}/${REMOTE_BUILD_DIR}/"

echo "🚚 Cleaning and moving files to web root..."
sshpass -p "$PASSWORD" ssh "${REMOTE_USER}@${REMOTE_HOST}" \
"echo '$PASSWORD' | sudo -S bash -c 'rm -rf ${REMOTE_WEB_DIR}/* && mv /home/${REMOTE_USER}/${REMOTE_BUILD_DIR}/* ${REMOTE_WEB_DIR}/'"

echo "🔄 Reloading nginx..."
sshpass -p "$PASSWORD" ssh "${REMOTE_USER}@${REMOTE_HOST}" "echo '$PASSWORD' | sudo -S systemctl reload nginx"

echo "✅ Deployment complete."