export function number(busStops: [number, number][]): number {
    let totalPassengers = 0;  
    for (let i = 0; i < busStops.length; i++) {
      const [entering, leaving] = busStops[i];  
      totalPassengers += entering - leaving;    
    }
    
    return totalPassengers; 
  }