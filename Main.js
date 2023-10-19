import { fetchData, postTweet } from './network-functions.js';

const username = "Antho1-2";

const tweetButton = document.getElementById('tweet-button');
const tweetInput = document.getElementById('tweet-input');
const tweetList = document.getElementById('tweet-list');

tweetButton.addEventListener('click', () => {
  const tweetText = tweetInput.value;
  if (tweetText) {
    postTweet(username, tweetText);
    tweetInput.value = '';
  }
});

function updateTweetList() {
  tweetList.innerHTML = '';
  fetchData(username, (tweets) => {
    tweets.forEach((tweet) => {
      const tweetItem = document.createElement('div');
      tweetItem.innerText = tweet.text;
      tweetList.appendChild(tweetItem);
    });
  });
}

updateTweetList();
