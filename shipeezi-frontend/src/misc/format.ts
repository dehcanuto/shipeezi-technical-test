function getInitials(fullName: string): string {
    const names = fullName.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return names[0][0].toUpperCase();
}

function getFirstName(fullName: string): string {
    const names = fullName.split(" ");
    return names[0];
}

export { getInitials, getFirstName }