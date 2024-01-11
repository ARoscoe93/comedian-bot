let jokeIndex = 0;
const jokes = [
  ["What did 0 say to 8?", "Nice belt."],
  ["What did the Horse say after it tripped?", "Help! I've fallen and I can't giddyup!"],
  ["Why did the scarecrow win an award?", "Because he was outstanding in his field!"],
  ["What do you call fake spaghetti?", "An impasta."],
  ["Why did the bicycle fall over?", "Because it was two-tired!"],
  ["How do you organize a space party?", "You planet!"],
  ["Why don't scientists trust atoms?", "Because they make up everything!"],
  ["How does a penguin build its house?", "Igloos it together!"],
  ["What's orange and sounds like a parrot?", "A carrot!"],
  ["Why did the tomato turn red?", "Because it saw the salad dressing!"],
  ["What do you call a fish wearing a bowtie?", "Sofishticated!"],
  ["What did the grape do when it got stepped on?", "Nothing, but it let out a little wine!"],
  ["Why did the math book look sad?", "Because it had too many problems."],
  ["What do you call a bear with no teeth?", "A gummy bear!"],
  ["Why did the coffee file a police report?", "It got mugged!"],
  ["How does a snowman get around?", "By riding an 'icicle!"],
  ["What did one ocean say to the other?", "Nothing, they just waved!"],
  ["Why don't skeletons fight each other?", "They don't have the guts!"]
];

const outOfJokesResponses = [
  "Sorry, I'm fresh out of jokes!",
  "I seem to have misplaced my joke book. Ask me again later!",
  "Looks like I need to restock my humor inventory. Next time, perhaps!",
  "Oh no, I've hit the joke limit! Let's chat about something else.",
  "Sorry, I'm out of jokes for now!",
  "I've told you all my jokes, come back later for more!",
  "I need to recharge my humor circuits.",
  "My joke generator is out of order!"
];

const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot-message';
  
  const avatar = document.createElement('div');
  avatar.className = 'fas fa-robot message-avatar';
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.textContent = messageText;

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(contentDiv);
  chatContent.appendChild(messageDiv);

  // Scroll to the bottom after adding the new message
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function getRandomOutOfJokesResponse() {
  const randomIndex = Math.floor(Math.random() * outOfJokesResponses.length);
  return outOfJokesResponses[randomIndex];
}

appendBotMessage(
  "Hello! I am Comedian Bot, here to make you laugh."
);

function requestJoke() {
  appendUserMessage("Tell me a joke!");

  setTimeout(function () {
    appendBotMessage("Ok, got one.");

    setTimeout(function () {
      appendBotMessage(jokes[jokeIndex][0]);

      setTimeout(function () {
        appendBotMessage(jokes[jokeIndex][1]);

        if (jokeIndex >= jokes.length - 1) {
          appendBotMessage(getRandomOutOfJokesResponse());
          userButton.style.display = 'none'; 
        } else {
          jokeIndex++;
        }
      }, 2000); 
    }, 1500); 
  }, 1000); 
}

function appendUserMessage(messageText) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user-message';
  
  const avatar = document.createElement('div');
  avatar.className = 'fas fa-smile user-avatar';
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.textContent = messageText;

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(contentDiv);
  chatContent.appendChild(messageDiv);

  // Scroll to the bottom after adding the new message
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

const userButton = document.getElementById("user-button");