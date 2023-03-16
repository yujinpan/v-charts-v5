#!/usr/bin/env sh

cd dist

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:yujinpan/v-echarts-v5.git main:gh-pages