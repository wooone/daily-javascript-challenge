import "normalize-path";
import "./styles.css";

const localQuotes = [
  {
    text:
      "夫人，兄弟我此番，只為劫財，不為劫色，同床，但不入身。有槍在此。若是兄弟我有冒犯夫人的舉動，你可以隨時幹掉我。若是夫人有任何要求，兄弟我，也絕不推辭。睡覺！",
    author: "張麻子"
  },
  {
    text: "我來鵝城只辦三件事，公平！公平！還是他媽的公平！",
    author: "張麻子"
  },
  {
    text: "我是想站著，還把錢掙了！",
    author: "張麻子"
  },
  {
    text: "她已經是個寡婦了，我不能讓她守活寡。",
    author: "張麻子"
  },
  {
    text: "黃四郎的臉上有四嗎？",
    author: "張麻子"
  },
  {
    text: "你究竟是要殺我，還是要睡我？",
    author: "老湯"
  },
  {
    text: "就一句話，噁心！",
    author: "老湯"
  },
  {
    text: "驚喜就是三天之後，給你們一百八十萬出城剿匪，接上我的腿",
    author: "黃四郎"
  },
  {
    text: "今 不聊屁股的事",
    author: "武舉人"
  }
];

const quoteContaienr = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function loading() {
  loader.hidden = false;
  quoteContaienr.hidden = true;
}

function complete() {
  loader.hidden = true;
  quoteContaienr.hidden = false;
}

function newQuote() {
  loading();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
  complete();
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);

newQuote();
