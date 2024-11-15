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

function formatDate(dateString: string) {
  const date = new Date(dateString);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export { getInitials, getFirstName, formatDate }