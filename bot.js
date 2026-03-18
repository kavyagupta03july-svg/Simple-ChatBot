const chatIcon = document.getElementById('chat-icon');
        const chatContainer = document.getElementById('chat-container');
        const closeChat = document.querySelector('.close-chat');
        const resetChat = document.querySelector('.reset-chat');

        let isBotResponding = false; 

        chatIcon.addEventListener('click', function() {
            chatContainer.style.display = 'flex';
            chatIcon.style.display = 'none';
        });

        closeChat.addEventListener('click', function() {
            chatContainer.style.display = 'none';
            chatIcon.style.display = 'flex';
        });

        resetChat.addEventListener('click', function() {
            resetMessages();
        });

        document.getElementById('send-button').addEventListener('click', function() {
            if (!isBotResponding) { 
                sendMessage();
            }
        });

        document.getElementById('user-input').addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && !isBotResponding) { 
                sendMessage();
            }
        });

        function sendMessage() {
            const userInput = document.getElementById('user-input').value;
            if (userInput.trim() !== '') {
                addMessage(userInput, 'user');
                document.getElementById('user-input').value = '';
                isBotResponding = true; 
                showLoadingIndicator(); 
                setTimeout(() => {
                    getBotResponse(userInput);
                }, 1000); 
            }
        }

        function addMessage(text, sender) {
            const messageContainer = document.createElement('div');
            messageContainer.classList.add('message', sender);
            messageContainer.textContent = text;
            document.getElementById('messages').appendChild(messageContainer);
        }

        function getBotResponse(userInput) {
            let botResponse = '';

            switch (userInput.toLowerCase()) {
                case 'hi':
                    botResponse = 'Hi🖐';
                    break;
                case 'how are you':
                    botResponse = 'I`m fine here What about you!';
                    break;
                case 'what are you doing':
                    botResponse = 'I am here right now answering your questions!';
                    break;
                case 'can i ask you a question':
                    botResponse = 'yes of course (but as per my fix response simple because I am here a simple Chat bot but my AI version was comming soon..)';
                    break;
                case 'ok thank you':
                    botResponse = 'your welcome 😊';
                    break;
                   
                default:
                    botResponse = 'Sorry😔, I am a simple chat bot I can give fix response answer but my AI version is comming soon at that time I give your all answer!';
            }

            setTimeout(() => {
                addMessage(botResponse, 'bot');
                isBotResponding = false; 
                hideLoadingIndicator(); 
            }, 2000); 
        }

        function showLoadingIndicator() {
            const loadingIndicator = document.createElement('div');
            loadingIndicator.classList.add('loading-indicator');

            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                loadingIndicator.appendChild(dot);
            }
            document.getElementById('messages').appendChild(loadingIndicator);
        }

        function hideLoadingIndicator() {
            const loadingIndicator = document.querySelector('.loading-indicator');
            if (loadingIndicator) {
                loadingIndicator.remove();
            }
        }

        function resetMessages() {
            document.getElementById('messages').innerHTML = '';
        } 