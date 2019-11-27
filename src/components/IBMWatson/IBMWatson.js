import React, { Component } from 'react';
import Pusher from 'pusher-js';
import TextField from '@material-ui/core/TextField';
import './Chatbot.css';

    class Chatbot extends Component {
      state = {
          userMessage: '',
          conversation: [],
        };
        componentDidMount() {
          const pusher = new Pusher("2e943924eacca8cc92f6", {
            cluster: "us2",
            encrypted: true,
          });

        const channel = pusher.subscribe('bot');
        channel.bind('bot-response', data => {
          const msg = {
            text: data.message,
            user: 'ai',
          };
          this.setState({
            conversation: [...this.state.conversation, msg],
          });
        });
      }

      handleChange = event => {
        this.setState({ userMessage: event.target.value });
      };

      handleSubmit = event => {
        event.preventDefault();
        if (!this.state.userMessage.trim()) return;

        const msg = {
          text: this.state.userMessage,
          user: 'human',
        };

        this.setState({
          conversation: [...this.state.conversation, msg],
        });
        fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: this.state.userMessage,
          }),
        });
        this.setState({ userMessage: '' });
      };

      render() {
        const ChatBubble = (text, i, className) => {
          return (
            <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
              <span className="chat-content">{text}</span>
            </div>
          );
        };

        const chat = this.state.conversation.map((e, index) =>
          ChatBubble(e.text, index, e.user)
        );

        return (
          <div>
            <h1>Chat with Bloom Agent</h1>
            <div className="chat-window">
              <div className="conversation-view">{chat}</div>
              <div className="message-box">
                <form className="chatForm" onSubmit={this.handleSubmit}>
                <TextField
                    id="standard-full-width"
                    value={this.state.userMessage}
                    onChange={this.handleChange}
                    className="text-input"
                    type="text"
                    fullWidth
                    placeholder="Hit Enter to send your inquiry"
                  />
                </form>
              </div>
            </div>
          </div>
        );
      }
    }

    export default Chatbot;