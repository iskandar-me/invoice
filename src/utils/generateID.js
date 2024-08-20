 export function generateRandomID() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";

  let id = '';

  // Generate two random uppercase letters
  for (let i = 0; i < 2; i++) {
    id += letters[Math.floor(Math.random() * letters.length)];
  }

  // Generate four random digits
  for (let i = 0; i < 4; i++) {
    id += digits[Math.floor(Math.random() * digits.length)];
  }

  return id;
}

// Example usage:
console.log(generateRandomID()); // Example output: "RT3080"
