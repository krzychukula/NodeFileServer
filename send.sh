#!/bin/bash

# run process in background
# nohup node server.js > /dev/null 2>&1 &

scp -r . 192.168.10.245:~/apps/contacts
