async function lowerCaseWords(mixedArray) {
  try {
    const filteredArray = mixedArray
      .filter(item => typeof item === 'string') // Filter strings
      .map(item => item.toLowerCase());         // Convert strings to lowercase
    
    return filteredArray;
  } catch (error) {
    throw new Error('Error processing array');
  }
}

// Example usage
const array = ['HELLO', 123, 'WORLD', true, 'JavaScript'];

(async () => {
  try {
    const result = await lowerCaseWords(array);
    console.log(result);  // ['hello', 'world', 'javascript']
  } catch (error) {
    console.log(error.message);
  }
})();

