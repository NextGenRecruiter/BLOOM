
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const childRouter = require('./routes/child.router');
const questionRouter = require('./routes/question.router')
const answerRouter = require('./routes/answer.router')
const WatsonRouter = require('./routes/Watson.router');
//This block of code is for Watson
DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
 parameterLimit: DEFAULT_PARAMETER_LIMIT,
 limit: DEFAULT_BODY_SIZE_LIMIT
});

// Body parser middleware
app.use(bodyParser.json(bodyParserJsonConfig(), {limit: '1 gb'}));
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/child', childRouter);
app.use('/api/question', questionRouter);
app.use('/api/answer', answerRouter);
app.use('/api/watson', WatsonRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
