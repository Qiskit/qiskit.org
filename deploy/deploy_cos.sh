#!/bin/bash

#install rclone
curl https://downloads.rclone.org/rclone-current-linux-amd64.deb -o rclone.deb
sudo apt-get install -y ./rclone.deb

CONFIG_PATH=$(rclone config file | tail -1)

# Decrypt config
openssl aes-256-cbc -K $encrypted_rclone_key -iv $encrypted_rclone_iv -in rclone.conf.enc -out $CONFIG_PATH -d

git clone --depth=1 https://github.com/Qiskit/qiskit-terra.git
cp -r qiskit-terra/qiskit/schemas ../dist/.

rclone sync --exclude 'documentation/**' ../dist IBMCOS:qiskit-org-website
