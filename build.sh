npm run docs:build

rm -rf /Users/liben/WebstormProjects/liberaterb.github.io/*

mv docs/.vuepress/dist/*  /Users/liben/WebstormProjects/liberaterb.github.io/

cd /Users/liben/WebstormProjects/liberaterb.github.io/

git add .
git commit -m 'deploy'