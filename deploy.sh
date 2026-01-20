#!/bin/bash
 
set -e
 
# --- Configuration ---
EC2_USER="ubuntu"
EC2_HOST="csm0001.int.devsnc.com"
SSH_KEY="~/.ssh/csm_aws_devsnc_rsa_key.pem"
REMOTE_DIR="/var/www/html/alectri-cars"
TEMP_DIR="/home/ubuntu/alectri-cars-deploy-temp"
 
# --- Build Step ---
echo "Building the project..."
npm run build
echo "Build complete."
 
# --- Prepare Remote ---
echo "Preparing remote directories..."
ssh -i "$SSH_KEY" "${EC2_USER}@${EC2_HOST}" "
  sudo mkdir -p ${REMOTE_DIR} &&
  sudo chown -R www-data:www-data ${REMOTE_DIR} &&
  rm -rf ${TEMP_DIR} &&
  mkdir -p ${TEMP_DIR}
"
 
# --- Upload to Temp ---
echo "Uploading files to temporary directory on remote..."
# Use 'dist/.' to include dotfiles (e.g., .htaccess) during copy
scp -i "$SSH_KEY" -r dist/. "${EC2_USER}@${EC2_HOST}:${TEMP_DIR}/"
 
# --- Deploy on Remote ---
echo "Deploying files on remote server..."
ssh -i "$SSH_KEY" "${EC2_USER}@${EC2_HOST}" "
  # Remove existing files (including dotfiles) safely
  sudo find ${REMOTE_DIR} -mindepth 1 -maxdepth 1 -exec rm -rf {} + &&
  # Copy everything (including dotfiles) from temp to remote dir
  sudo cp -a ${TEMP_DIR}/. ${REMOTE_DIR}/ &&
  sudo chown -R www-data:www-data ${REMOTE_DIR} &&
  sudo chmod -R 755 ${REMOTE_DIR} &&
  rm -rf ${TEMP_DIR}
"
 
echo "Deployment successful!"