function formatDuration (seconds) {
    // Complete this function
      if (seconds === 0) {
      return "now";
    }
  
    const MINUTE = 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const YEAR = DAY * 365;
    
    let remainingSeconds = seconds;
    let years = Math.floor(remainingSeconds / YEAR);
    remainingSeconds -= years * YEAR;
    let days = Math.floor(remainingSeconds / DAY);
    remainingSeconds -= days * DAY;
    let hours = Math.floor(remainingSeconds / HOUR);
    remainingSeconds -= hours * HOUR;
    let minutes = Math.floor(remainingSeconds / MINUTE);
    remainingSeconds -= minutes * MINUTE;
    let output = [];
  
    if (years > 0) {
      output.push(years + " year" + (years === 1 ? "" : "s"));
    }
  
    if (days > 0) {
      output.push(days + " day" + (days === 1 ? "" : "s"));
    }
  
    if (hours > 0) {
      output.push(hours + " hour" + (hours === 1 ? "" : "s"));
    }
  
    if (minutes > 0) {
      output.push(minutes + " minute" + (minutes === 1 ? "" : "s"));
    }
  
    if (remainingSeconds > 0) {
      output.push(remainingSeconds + " second" + (remainingSeconds === 1 ? "" : "s"));
    }
  
    if (output.length === 1) {
      return output[0];
    }
  
    let last = output.pop();
    return output.join(", ") + " and " + last;
  }