export default function ScoreDisplay({ score, winner }) {
  const winPhrases = [
    "You win 😔",
    "You're pretty good at this!",
    "Shit.",
    "I always lose 😢",
    "This is rigged.",
    "I demand a rematch!",
    "This game sucks. I quit.",
    "You got lucky. I slipped.",
    "Enjoy your meaningless victory. 🏆",
    "You think you're better than me?!",
    "Your mom must be so proud. 🙄",
    "Okay, but can you do taxes?",
    "I'm gonna cry now. 😭",
    "I hope you step on a LEGO.",
    "Ugh. I’m uninstalling myself.",
    "Can you let me win? Just once?",
  ];
  const losePhrases = [
    "You lose 🎉",
    "Yay I won!",
    "Ha, you're a loser.",
    "LoSeRrR",
    "That was embarrassing. 😂",
    "Awww, did you try? 🥺",
    "How does it feel to be bad?",
    "Try again... maybe you’ll get lucky.",
    "This is a skill issue.",
    "Oof. That was brutal.",
    "This is why aliens won’t visit us.",
    "That was painful to watch.",
    "I felt bad, so I let you lose.",
  ];
  const tiePhrases = [
    "It's a tie 🤝",
    "Wow. That was anticlimactic.",
    "I didn't lose, so I’ll take it.",
    "Guess we both suck.",
    "This is going nowhere.",
    "So... now what?",
    "Perfectly balanced. As all things should be.",
    "Want to just flip a coin?",
    "This is awkward.",
    "What are the odds?! (Actually, 1 in 9)",
    "Let's just agree I won.",
    "Dull. I want blood.",
    "Rematch. Right now.",
  ];

  return (
    <div className="rps__score-container">
      <h2 className="rps__score">Score: {score}</h2>
      <p className="rps__message">
        {winner === "player" &&
          winPhrases[Math.floor(Math.random() * winPhrases.length)]}
        {winner === "computer" &&
          losePhrases[Math.floor(Math.random() * losePhrases.length)]}
        {winner === "tie" &&
          tiePhrases[Math.floor(Math.random() * tiePhrases.length)]}
      </p>
    </div>
  );
}
