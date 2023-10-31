const whoIsPaying = name => name.length <= 2 ? [name] : [name, name.substring(0, 2)];
