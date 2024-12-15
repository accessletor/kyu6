function getCard() {
    // Helper function to generate random unique numbers within a given range
    function generateNumbers(rangeStart, rangeEnd, count) {
      const numbers = new Set();
      while (numbers.size < count) {
        const num = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
        numbers.add(num);
      }
      return Array.from(numbers);
    }
  
    // Generate random numbers for each column
    const bNumbers = generateNumbers(1, 15, 5); // B: 5 numbers from 1 to 15
    const iNumbers = generateNumbers(16, 30, 5); // I: 5 numbers from 16 to 30
    const nNumbers = generateNumbers(31, 45, 4); // N: 4 numbers from 31 to 45
    const gNumbers = generateNumbers(46, 60, 5); // G: 5 numbers from 46 to 60
    const oNumbers = generateNumbers(61, 75, 5); // O: 5 numbers from 61 to 75
  
    // Format the numbers with their column letters
    const bFormatted = bNumbers.map(num => `B${num}`);
    const iFormatted = iNumbers.map(num => `I${num}`);
    const nFormatted = nNumbers.map(num => `N${num}`);
    const gFormatted = gNumbers.map(num => `G${num}`);
    const oFormatted = oNumbers.map(num => `O${num}`);
  
    // Combine the columns into the final Bingo card in the specified order: B, I, N, G, O
    return [...bFormatted, ...iFormatted, ...nFormatted, ...gFormatted, ...oFormatted];
  }
  console.log(getCard())