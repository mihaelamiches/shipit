# ReactJS starter

## run locally

```bash
cd front-end
npm start
```

## deploy on Heroku

### [Prerequisites](https://github.com/mihaelamiches/shipit/blob/master/README.md)

- Sign up for a Heroku account [here](https://signup.heroku.com/)
- Create a [new app](https://dashboard.heroku.com/new-app). The frontend will be available at `https://[FRONTEND-APP-NAME].herokuapp.com/`

### 1. login

```bash
cd front-end
heroku login
```

### 2. Heroku repository

setup the local repository

```bash
git init
```

_replace `[FRONTEND-APP-NAME]` below with your frontend-end app name_
> (eg: `$ heroku git:remote -a pacific-temple`)

```bash
heroku git:remote -a [FRONTEND-APP-NAME]
```

### 2. environment variables

Set the API location to your [deployed backend](https://github.com/mihaelamiches/shipit/blob/master/back-end/README.md)

_replace `[BACKEND-APP-NAME]` below with your back-end app name_
> (eg: `heroku config:set ALLOW_ORIGIN=https://pacific-temple-api.herokuapp.com`)

```bash
heroku config:set REACT_APP_API_LOCATION=https://[BACKEND-APP-NAME].herokuapp.com/
```

### 3. ship it

```bash
git add .
git commit -m "make it fly"
git push heroku master
```

### 4. make it so

> add your magic. repeat.

### 5. take a break eat, sleep, take care of yourself ❤️

> Repeat steps 3-5 