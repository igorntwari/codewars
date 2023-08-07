let whatTimeIsIt = function(angle) {
    let totalMinutes = Math.floor(angle / 360 * 720);
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
  
    let HH = (hours === 0) ? '12' : hours.toString().padStart(2, '0');
    let MM = minutes.toString().padStart(2, '0');
  
    return HH + ':' + MM;
  }