#!/bin/bash
CONFIG_PATH=$(rclone config file)

# Decrypt config
openssl aes-256-cbc -K $encrypted_rclone_key -iv $encrypted_rclone_iv -in rclone.conf.enc -out $CONFIG_PATH -d

rclone sync ../build IBMCOS:qiskit-web-test
