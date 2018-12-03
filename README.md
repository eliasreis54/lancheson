[![Build Status](https://travis-ci.org/eliasreis54/lancheson.svg?branch=master)](https://travis-ci.org/eliasreis54/lancheson)                                                                                                                                                                              [![codecov](https://codecov.io/gh/eliasreis54/lancheson/branch/master/graph/badge.svg)](https://codecov.io/gh/eliasreis54/lancheson)
# LanchesOn

This project is a simple implementations of API in node.js with mongoDB.
The project structure is simple, I have a folder **src** and all the files of project are in that folder.
The folder **router**, I separed the routers to be more organized. We have also the **service** folder, It contains all business rule.
In the **database** folder, we have the models used in database storage.
And at the beginning of everything we can find in **index.js**.

## Getting Started

To get start with the project, you have two alternatives:
* 1 - Download it and run on your machine. (Presume you have node.js and mongoDB installed);
* 2 - Run this project with docker-compose. (Presume you have docker-compose instaled);

### 1 - Running on your machine

Firt of all, we need to install Node.js. For this, you can see the steps on [Node web site](https://nodejs.org/en/).

Installing node, you automatically install npm. So go the project and run

```
npm install
```

With that, you install all the dependencies of project. After, you need to run.

```
npm start
```

With that, all the projet already is up.

To use the API call's, you can see the api documentation:

[Order requests](https://documenter.getpostman.com/view/3534154/RzfdrBJ9)

[Product requests](https://documenter.getpostman.com/view/3534154/RzfdrBDm)



### 2 - Running this project on docker-compose.

install docker and docker-compose.
* Docker engine

Up to date information and installation procedures for the docker engine can be found at the project’s documentation [here](https://docs.docker.com/install/).

* Docker Compose

Up to date information and installation procedures for the docker engine can be found at the project’s documentation [here](https://docs.docker.com/compose/install/).

After all intalled, go to project, and run in the console.:
```
docker-compose up -d
```

With that, all the projet already is up.

To use the API call's, you can see the api documentation:

[Order requests](https://documenter.getpostman.com/view/3534154/RzfdrBJ9)

[Product requests](https://documenter.getpostman.com/view/3534154/RzfdrBDm)


## Tests

I used [jest](https://jestjs.io/) to help me with the automated testing. The maximum of functions is tested and [Travis](https://travis-ci.org/) do the continuos integrations.

### Running the tests

Go to project and run in the console.

```
npm install --save-dev
```
You will install all dev dependencies. After that you are enable to run tests.
```
npm test
```

The tests will be executed and the sample report will show in the console.


## Built With

* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) - Dependency Management
* [Express](https://expressjs.com/) - The web framework used


## Versioning

We use [git](https://git-scm.com/) for versioning.

## Authors

* **Elias Reis* - *Backend Developer* - [Elias Reis](https://github.com/eliasreis54)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
