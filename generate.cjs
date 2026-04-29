const fs = require('fs');
const ranks = ['S+', 'S', 'A+', 'A', 'B+'];
const generatePlayers = () => {
  const players = [];
  for(let i=1; i<=380; i++) {
    // distribution: few S+, some S, etc.
    let rank;
    if (i <= 10) rank = 'S+';
    else if (i <= 40) rank = 'S';
    else if (i <= 100) rank = 'A+';
    else if (i <= 200) rank = 'A';
    else rank = 'B+';

    players.push({
      id: i,
      name: 'Spartan_' + i.toString().padStart(3, '0'),
      rank: rank
    });
  }
  fs.mkdirSync('src/data', { recursive: true });
  fs.writeFileSync('src/data/players.json', JSON.stringify(players, null, 2));
}
generatePlayers();
