export function flip(dir: string, arr: number[]): number[] {
    const sorted: number[] = arr.sort((a, b) => b - a);
  
    if (dir === 'L') {
      return sorted;
    } else if (dir === 'R') {
      return sorted.reverse();
    } else {
      throw new Error("Invalid direction");
    }
  }