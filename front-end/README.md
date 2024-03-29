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

### login

```bash
cd front-end
heroku login
```

### 1. Heroku repository

setup the local repository

```bash
git init
```

_replace `[FRONTEND-APP-NAME]` below with your frontend-end app name_
> (eg: `$ heroku git:remote -a pacific-temple`)

```bash
heroku git:remote -a [FRONTEND-APP-NAME]
```

### 2. ship it

```bash
git add .
git commit -m "make it fly"
git push heroku master
```

### 3. environment variables

Set the API location to your [back-end server](https://github.com/mihaelamiches/shipit/blob/master/back-end/README.md)

_replace `[BACKEND-APP-NAME]` below with your back-end app name_
> (eg: `heroku config:set REACT_APP_API_LOCATION=https://pacific-temple-api.herokuapp.com`)

```bash
heroku config:set REACT_APP_API_LOCATION=https://[BACKEND-APP-NAME].herokuapp.com/
```


### 4. make it so

> add your magic

### 5. relax, take a break, eat, sleep, be kind to you and others ❤️

> Repeat steps 2,4,5