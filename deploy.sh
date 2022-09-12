yarn build

git add dist && git commit -m "Update subtree"

git subtree push --prefix dist origin gh-pages
