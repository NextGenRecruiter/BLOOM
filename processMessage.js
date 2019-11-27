    // process-message.js

    const Dialogflow = require('dialogflow');
    const Pusher = require('pusher');

    // You can find your project ID in your Dialogflow agent settings
    const projectId = 'bloom-vwysae'; //https://dialogflow.com/docs/agents#settings
    const sessionId = '123456';
    const languageCode = 'en-US';

    const config = {
      credentials: {
        private_key: "nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCRAPjgdjjOnM8S\n35hHl35VLoaDWDM9dzgtflL5xPUz8Kr24Y1ieRLr+49vdPQkWUNwABNnq+IAIyKx\njGKrZUlX2VJMliF55NW42LV/9QTOSjs3s41jbqtLqWk82jgTVqMy0nQzjzhTGhgb\nwQjagsFgF4cDkOj8l+xZivVUEttKXt/sovYQq+cuvi5WLz0/tvYpdtJvwJXplGQC\nrNvj5bQkslQjyvdXMwkL80u3nmSaUWtDl/CfaBmXDJdO2N/iSPIvqbUKgFfruV9O\n3MmhbnbykhXD1V3V3OPAhPgP8P1s/Ssqy6c3cjDvxrBy69pGRWtZ6P6/EfIfhjK1\nU9LWDAGDAgMBAAECggEAAVuTL9m29gaVbFosnTQjJZ3AaEDcGEArc7R0dN6uCDmK\nvNaeP6Td3GsVy/Mn5KJhDFfHRHNPD1pE3mSUVMrwo13eNHpgP7mUKLjavRDECmWW\nie4xraYFs5SXbwZcV1coHnc0JOhNnH66+3ywJ1HpZFTffkLXKn7h9N9At4YrGsQU\nVJEMxY+AtO7U+VtCWQbKWTcJVzIqmHsImGbB7HSr74JquIqXzImrO56ZyeLOUh/d\nlJXiB4O48JqIwiy9x/ndVxP43Vbh2rQ0bS129YyoJnTjPSrQXeA3N/2xAwZvH3Qz\nF+XMkywIPaEe/LHuspofAQwjdo2dP1lTMSZvvtWIYQKBgQDBwggEEfiFn3+KDGX3\n8bbUTpxWEA3a9DAD9evwzJEcuM2W8B7wL8ngHHQpmNCUj/i/i05EG1y5/LoJax6F\nrui7xAGe5qtL+iJ9Z+d5SiABYqEhlUCEOKxUjr0PDQC3D6ahYjhUtkripmLU+KQ6\n3rOKTYR5hOo934zHpamltw+ZYQKBgQC/lZKcChal4oQFnw/eK/FQm0+pH7ATZi+C\ns/SaP3WQdmJz6iWkpQ4hoj0UB/fzeF/izuPz/GKsMsDWPiq2KHBC5nm2xgrXffIw\nzGS7wlq2apZ2lm/5mSHrJ/wdwQvtA/Tl8JwvFgM57SlQZREizVkgxucBFGXT+JOM\np5WKIPxRYwKBgQCUHnRqSCKoY8noCppY9RtDKeUxlYxB+bJLFNCNgJTeVBg2btH3\n41B8VsQmmH+7UmRiaWgngJNeSukdEhp/L7sS70Ad7VC+ADYlkCzP9+6HoJJ1TdfI\nPFrhOU0mGFaXmwtTC/bsK38LzQ54qKtDpcOy0peXHhjDvAWvCeGqoUr3gQKBgHDZ\nHqmQ+7Qsj81r2wHn6lWrlimtg555o2SesWamGI7GXMmgUxn/Kyq+kLGa2/9qmThU\n20rdEBYUMyg/KBNyEGYnsevqDXrPMfhyfKdoHNy0PfqONFjWTXdhbwzrqCWtHfTP\nXIATvETDoIE9dvGD+Yrn/ivRowVPt0GzeM8LDPS3AoGBAK6b7AQCOCesfDTFs/CC\nXYwjwuM9/XPFADwiYeV9JBB814tepBslyBoomDxcVNCNU4jFQ1y/vT8/ZeLekYYq\nc6+ZO2xxL/agT519XgddDjIpg1r23uSWHH4LsivlGNoay6U7+V3xlvF5HPd7So2q\nDUl4VtC6DougUAAV1eAUx/Zi",
        client_email: "dialogflow-byhpla@bloom-vwysae.iam.gserviceaccount.com",
      },
    };

    const pusher = new Pusher({
      appId: "897691",
      key: "2e943924eacca8cc92f6",
      secret: "f4ff9cb7af36f87f0c6d",
      cluster: "us2",
      encrypted: true,
    });

    const sessionClient = new Dialogflow.SessionsClient(config);

    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    const processMessage = message => {
      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: message,
            languageCode,
          },
        },
      };

      sessionClient
        .detectIntent(request)
        .then(responses => {
          const result = responses[0].queryResult;
          return pusher.trigger('bot', 'bot-response', {
            message: result.fulfillmentText,
          });
        })
        .catch(err => {
          console.error('ERROR:', err);
        });
    }

    module.exports = processMessage;