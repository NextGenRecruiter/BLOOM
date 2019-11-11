import { Conversation } from 'react-native-watson'
 
Conversation.initialize( "user", "password" )
let workspaceId="your_workspace_id"
 
// To start the conversation, send a message with only the workspaceId
Conversation.message(workspaceId)
            .then(response => {
                console.log(JSON.stringify(response))
                this.setState({output: response.output.text, context: response.context})
            })
            
// To continue a conversation, and send the user's response, send the workspaceId and the input (text and saved context)
 
let input = {
                text: this.state.text,
                context: this.state.context
            }
 
Conversation.message(workspaceId, input)
    .then(response => {
        console.log(JSON.stringify(response))
        this.setState({output: response.output.text, context: response.context})
    })