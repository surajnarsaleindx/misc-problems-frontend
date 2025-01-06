#!/bin/bash
# Script that runs the Documentation Generation
# as of 9/28/2021 it will only run for the given Languages
#	Go
#	Java
#	TypeScript
#	Python
echo "Determining The Language"

if [ $(find . -name *.go -print -quit) ]
then
  echo "Found Go Language"
  echo $(find . -name *.go)
  go get -v golang.org/x/tools/cmd/godoc
  go get -v gitlab.com/tslocum/godoc-static
  mkdir -p docs
  cd build
  godoc-static -verbose -destination=../docs `find . -name '*go.mod' | sed 's/\/go.mod/ /g'`
fi

if [ $(find . -name *.java -print -quit) ]
then
  echo "Found Java Language"
  echo $(find . -name *.java)
  mkdir -p docs
  cd build
  javadoc -d "../docs" `find . -name '*.java'|grep -v test`
fi

if [ $(find . -name *.ts -print -quit) ]
then
  echo "Found TypeScript Language"
  echo $(find . -name *.ts)
  mkdir -p docs
  npm install --prefix ./build 
  npm install typescript --prefix ./build 
  npm install typedoc --save-dev --prefix ./build 
  cd build
  npx typedoc --out ../docs `find . -name '*.ts'`
fi

if [ $(find . -name *.py -print -quit) ]
then
  echo "Found Python Language"
  echo $(find . -name *.py)
  mkdir -p docs
  python -m pydoc -w build
  sudo mv build.html docs/index.html
  python -m pydoc -w `find ./build -name '*' | sed 's/\//./g' | sed 's/\.py/ /g' |sed 's/../ /'`
  sudo mv *.html docs 
fi

echo "Done"
