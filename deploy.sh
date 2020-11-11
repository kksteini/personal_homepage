#!/bin/bash
if [ -d ~/ssr-server/dist ]; then
    rm -rf ~/ssr-server/dist
fi

mkdir -p ~/ssr-server/
cp -r ./dist ~/ssr-server/

cd ~/ssr-server/dist/ssr/
npm i

pm2 stop --name Homepage
pm2 start ~/ssr-server/dist/ssr/index.js --name Homepage
