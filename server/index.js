const express = require("express");
var cors = require('cors')
const app = express();
const port = 3000;
const projectRoutes = require('./routes/projectRoutes');
const employeeRoutes = require('./routes/employeeRoutes');


// middlewares
app.use(express.json());
app.use(cors())

// routes
app.use('/api/v1/project/', projectRoutes);
app.use('/api/v1/employee/', employeeRoutes);


app.use("/", (res, req) => {
    req.send("Welcom to Node API")
});

app.listen(port, console.log(`Server is Listening on port ${port}...`));

