export const listSquared = (m:number, n:number):number[][] => {
    let result = [];
        for(let i = m;i <= n;i++){
            let sum = 0;
            for (let j = 1;j <= i/2;j++) {
                i % j == 0 && (sum += j*j);
            } 
            Math.sqrt(sum+i*i)%1 == 0 && result.push([i,sum+i*i]);
        }
        return result;
    
    }