export class Kata {
    static highAndLow(numbers: string): string {
      const numArray = numbers.split(" ").map(Number);
      const low = Math.min(...numArray);
      const high = Math.max(...numArray);
      return `${high} ${low}`;
    }
  }