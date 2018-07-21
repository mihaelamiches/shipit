const dotenv = require('dotenv');
const express = require('express');
const superagent = require('superagent');
const cors = require('cors')
const app = express();

dotenv.load();

const port = process.env.PORT;
const allow_origin = process.env.ALLOW_ORIGIN;

app.set("port", port);
app.use(cors({ origin: allow_origin }));

app.get('/wiki', (req, res) => {
    console.log("🔎: ", req.query.search);
    res.setHeader('Content-Type', 'application/json');
    superagent.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${req.query.search}&format=json`)
    .end((err, r) => {
      if (err) { res.send(err); return console.log(err); }
      res.send(r.body);
    });   
})

app.listen(port, () => {
    console.log('👀 :' + port);
    console.log('✅ :' + allow_origin);
});