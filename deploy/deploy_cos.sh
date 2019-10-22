#!/bin/bash

#install rclone
curl https://downloads.rclone.org/rclone-current-linux-amd64.deb -o rclone.deb
sudo apt-get install -y ./rclone.deb

CONFIG_PATH=$(rclone config file | tail -1)

# Decrypt config
openssl aes-256-cbc -K $encrypted_rclone_key -iv $encrypted_rclone_iv -in rclone.conf.enc -out $CONFIG_PATH -d

cp -r ../documentation ../build/es5-bundled/.
cp -r ../license ../build/es5-bundled/.
cp -r ../googlefd7c7bd12b94442f.html ../build/es5-bundled/.
cp -r ../education ../build/es5-bundled/.
cp -r ../modelq ../build/es5-bundled/.
cp -r ../robots.txt ../build/es5-bundled/.
cp -r ../404.html ../build/es5-bundled/.

rclone sync ../build/es5-bundled IBMCOS:qiskit-org-website
