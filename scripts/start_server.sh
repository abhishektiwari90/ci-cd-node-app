#!/bin/bash
pkill node || true
cd /home/ubuntu
nohup node index.js > output.log 2>&1 &

