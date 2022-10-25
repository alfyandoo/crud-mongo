const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('./db.js');

const app = express();
const port = 8000;
const routes = require('./routes');

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/todos", routes);

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
});