const chunks = prizes => {
  const chunks = [];
  const chunkSize = 2;
  for (let i = 0; i < prizes.length; i += chunkSize) {
    chunks.push(prizes.slice(i, i + chunkSize));
  }

  return chunks;
};

export default chunks;
