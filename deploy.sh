#yarn build

rm -rf ../vue-pinterest-gh-pages/*

cp -R ./dist/* ../vue-pinterest-gh-pages

cd ../vue-pinterest-gh-pages

git add
git commit -m "new version"
git push
