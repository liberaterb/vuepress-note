npm run docs:build

rm -rf D:/projects/liberaterb.github.io/*

mv docs/.vuepress/dist/*  D:/projects/liberaterb.github.io/

cd D:/projects/liberaterb.github.io/

git add .
git commit -m 'deploy'
git push --force