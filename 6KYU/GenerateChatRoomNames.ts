export function generateChatRoomNames(users: string[]): string[] {
    const firstNameMap: { [key: string]: string[] } = {};
    for (const user of users) {
      const [firstName, lastName] = user.split(' ');
      const initials = `${firstName} ${lastName.charAt(0)}`;
      
      if (!firstNameMap[firstName]) {
        firstNameMap[firstName] = [user];
      } else {
        firstNameMap[firstName].push(user);
      }
    }
    const simplifiedNames: string[] = [];
    for (const firstName in firstNameMap) {
      const usersWithSameFirstName = firstNameMap[firstName];
      if (usersWithSameFirstName.length === 1) {
        simplifiedNames.push(firstName);
      } else {
        const hasSharedLastNameInitial = usersWithSameFirstName.some(user => user.split(' ')[1].charAt(0) === user[0].split(' ')[1].charAt(0));
        
        if (hasSharedLastNameInitial) {
          simplifiedNames.push(...usersWithSameFirstName);
        } else {
          for (const user of usersWithSameFirstName) {
            simplifiedNames.push(`${user.split(' ')[0]} ${user.split(' ')[1].charAt(0)}`);
          }
        }
      }
    }
    const sortedNames = simplifiedNames
      .sort()
      .map(name => name.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()));
  
    return sortedNames;
  }