// app.js
var express = require('express');
var cors = require('cors');
var yearRouter = require('./routes/year');

var app = express();

app.use(cors());
app.use(express.json({
reviver: (key, value) => {
if (key === 'year' && typeof value === 'number') {
return String(value);
}
return value;
}
}));
app.use(express.urlencoded({ extended: false }));

app.use('/', yearRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
