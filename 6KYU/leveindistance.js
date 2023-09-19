function levenshtein(a, b) {
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;
  
    let matrix = [];
  
    // Initialize the matrix
    for (let i = 0; i <= a.length; i++) {
      matrix[i] = [i];
    }
  
    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }
  
    // Fill in the matrix
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        let cost = a[i - 1] == b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // Deletion
          matrix[i][j - 1] + 1,      // Insertion
          matrix[i - 1][j - 1] + cost // Substitution
        );
      }
    }
  
    return matrix[a.length][b.length];
  }
  
  // Example usage:
  let str1 = "kitdfererten";
  let str2 = "siterereeerereting";
  let distance = levenshtein(str1, str2);
  console.log(distance);
  