# starter api

## run dev server locally

```bash
cd back-end
npn run dev
```

the server will be available at `http://localhost:3001`

## deploy on Heroku

### [Prerequisites](https://github.com/mihaelamiches/shipit/blob/master/README.md)

- Sign up for a Heroku account [here](https://signup.heroku.com/) if you don't already have an account.
- Create a [new app](https://dashboard.heroku.com/new-app) for the back-end. It will be available at `https://[BACKEND-APP-NAME].herokuapp.com/`

### login

```bash
cd back-end
heroku login
```

### 1. setup Heroku repository

setup the local repository

```bash
git init
```

_replace `[BACKEND-APP-NAME]` below with your backend-end app name_
> (eg: `$ heroku git:remote -a pacific-temple-api`)

```bash
heroku git:remote -a [BACKEND-APP-NAME]
```

### 2. ship it

```bash
git add .
git commit -m "make it fly"
git push heroku master
```

### 3. CORS

Set the `ALLOW_ORIGIN` environment variable to your [deployed front-end](https://github.com/mihaelamiches/shipit/blob/master/front-end/README.md)

_replace `[FRONTEND-APP-NAME]` below with your front-end app name_
> (eg: `heroku config:set ALLOW_ORIGIN=https://pacific-temple-58446.herokuapp.com`)

```bash
heroku config:set ALLOW_ORIGIN=https://[FRONTEND-APP-NAME].herokuapp.com
```

### 4. make it so

> add your magic. repeat.

### 5. relax, take a break, eat, sleep, be kind to you and others ❤️

> Repeat steps 3,4,5