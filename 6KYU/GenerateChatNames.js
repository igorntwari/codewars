function generateChatRoomNames(users) {
    users = [ 'Jane J', 'Jane J', 'Joe', 'Joe J', 'John', 'John J' ] 
    const firstNameCount = {};
    const initialsCount = {};
    const finalArr = [];
  
    for (const user of users) {
      const [firstName, lastName] = user.split(' ');
      const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
      const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  
      if (!firstNameCount[formattedFirstName]) {
        firstNameCount[formattedFirstName] = [formattedFirstName];
      } else {
        firstNameCount[formattedFirstName].push(formattedFirstName);
      }
  
      if (!initialsCount[formattedFirstName.charAt(0)]) {
        initialsCount[formattedFirstName.charAt(0)] = [formattedFirstName];
      } else {
        initialsCount[formattedFirstName.charAt(0)].push(formattedFirstName);
      }
    }
  
    for (const name in firstNameCount) {
      if (firstNameCount[name].length === 1) {
        finalArr.push(name);
      } else {
        const sortedInitials = initialsCount[name.charAt(0)].sort();
        for (const initial of sortedInitials) {
          finalArr.push(`${initial} ${name.charAt(0)}`);
        }
      }
    }
  
    const sortedFinalArr = finalArr.sort();
    return sortedFinalArr;
  }
  generateChatRoomNames()