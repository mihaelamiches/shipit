# not wikipedia search

built with ReactJS

## 1. clone this repo

## 2. run locally

```bash
cd front-end
npm start
```

## 3. deploy on heroku

- Sign up for a Heroku account [here](https://signup.heroku.com/)
- Create a [new app](https://dashboard.heroku.com/new-app). The frontend will be available at `https://[YOUR-FRONTEND].herokuapp.com/`

### 3.1 heroku login

```bash
cd front-end
heroku login
```

### 3.2 setup environment

Set the API location to your [deployed backend](../README)

_replace `[YOUR-BACKEND-APP]` below with your back-end app name_
> (eg: `heroku config:set ALLOW_ORIGIN=https://pacific-temple-api-58446.herokuapp.com`)

```bash
heroku config:set REACT_APP_API_LOCATION=https://[YOUR-BACKEND-APP].herokuapp.com/
```

### 3.3 ship it

```bash
git add .
git commit -m "make it fly"
git push heroku master
```

### 3.4 make it so

> add your magic. repeat.


### 3.5 eat, sleep, take care of yourself ❤️

> Repeat 3.3, 3.4, 3.5