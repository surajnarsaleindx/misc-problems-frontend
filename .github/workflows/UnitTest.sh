#!/bin/bash
# Script that runs the unit tests and creates coverage reports
# as of 10/4/2021 it will only run for the given Languages
#	Go
#	Java
#	TypeScript
#	Python
echo "Determining The Language"

if [ $(find . -name *.go -print -quit) ]
then
  echo "Found Go Language"
  echo $(find . -name *.go)
  cd build
  go test -v -race -coverprofile coverage.out 
  #go test -coverprofile=coverage.out  
  if [ $? -gt 0 ]
  then
  exit 1
  fi
fi

if [ $(find . -name *.java -print -quit) ]
then
  echo "Found Java Language"
  echo $(find . -name *.java)
  cd build 
  mvn test
  mvn clean jacoco:prepare-agent install jacoco:report
  if [ $? -gt 0 ]
  then
  exit 1
  fi
fi

if [ $(find . -name *.ts -print -quit) ]
then
  echo "Found TypeScript Language"
  echo $(find . -name *.ts)
  cd build
  npm i jest @types/jest ts-jest typescript -D
  npx jest --verbose --collectCoverage
  if [ $? -gt 0 ]
  then
  exit 1
  fi
fi

if [ $(find . -name *.py -print -quit) ]
then
  echo "Found Python Language"
  echo $(find . -name *.py)
  cd build
  pip install pytest
  pip install pytest-cov
  pytest -v --cov=./ --cov-report=xml
  if [ $? -gt 0 ]
  then
  exit 1
  fi
fi

echo "Done"
