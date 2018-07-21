# not-wiki-search api

## run locally

```bash
cd back-end
npn run dev
```

## deploy backend on heroku

- Sign up for a Heroku account [here](https://signup.heroku.com/) if you don't already have an account.
- Create a [new app](https://dashboard.heroku.com/new-app). The back-end will be available at `https://[YOUR-BACKEND-APP-NAME].herokuapp.com/`

### heroku login

```bash
cd back-end
heroku login
```

### ship it

```bash
git add .
git commit -m "make it fly"
git push heroku master
```

### CORS

Set the `ALLOW_ORIGIN` environment variable to your [deployed front-end](../README)

_replace `[YOUR-FRONTEND-APP]` below with your front-end app name_
> (eg: `heroku config:set ALLOW_ORIGIN=https://pacific-temple-58446.herokuapp.com`)

```bash
heroku config:set ALLOW_ORIGIN=https://[YOUR-FRONTEND-APP].herokuapp.com
```
