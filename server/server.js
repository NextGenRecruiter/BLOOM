
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const childRouter = require('./routes/child.router');
const questionRouter = require('./routes/question.router');
const answerRouter = require('./routes/answer.router');
const updateAnswer = require('./routes/updateAnswer.router')
const chatbotRouter = require('./routes/Chatbot.router');


// Body parser middleware
app.use(bodyParser.json({limit: '1 gb'}));
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
app.use('/api/answer/edit', updateAnswer);
app.use(cors());
app.use('/api/chat', chatbotRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
