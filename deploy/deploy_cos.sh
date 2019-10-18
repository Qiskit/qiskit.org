#!/bin/bash

#install rclone
curl https://downloads.rclone.org/rclone-current-linux-amd64.deb -o rclone.deb
sudo apt-get install -y ./rclone.deb

CONFIG_PATH=$(rclone config file | tail -1)

# Decrypt config
openssl aes-256-cbc -K $encrypted_rclone_key -iv $encrypted_rclone_iv -in rclone.conf.enc -out $CONFIG_PATH -d

cp -r ../documentation ../build/default/.
cp -r ../license ../build/default/.
cp -r ../googlefd7c7bd12b94442f.html ../build/default/.
cp -r ../education ../build/default/.
cp -r ../modelq ../build/default/.
cp -r ../robots.txt ../build/default/.

rclone sync ../build/default IBMCOS:qiskit-web-test
