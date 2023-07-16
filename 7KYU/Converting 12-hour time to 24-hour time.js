function to24hourtime(hour, minute, period) {
    // hour will always range from 1 to 12 (inclusive)
    // minute will always range from 0 to 59 (inclusive)
    // period will always be either "am" or "pm"
    if (hour < 1 || hour > 12 || minute < 0 || minute > 59 ||
        (period !== 'am' && period !== 'pm')) {
      throw new Error('Invalid input');
    }
  
    hour = (period === 'pm' && hour !== 12) ? hour + 12 :
    (period === 'am' && hour === 12) ? 0 : hour;
  
    let NewHours = hour.toString().padStart(2, '0');
    let NewMinutes = minute.toString().padStart(2, '0');
    
    return NewHours +  NewMinutes;
  }
  