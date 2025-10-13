export function getCurrentMonthYear() {
  const now = new Date();
  const month = now.toLocaleDateString('fr-FR', { month: 'long' });
  const year = now.getFullYear();
  
  // Capitaliser la première lettre
  const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);
  
  // Utiliser "d'" pour les voyelles, "de" pour les consonnes
  const firstLetter = monthCapitalized.charAt(0).toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const preposition = vowels.includes(firstLetter) ? "d'" : "de ";
  
  return `${preposition}${monthCapitalized} ${year}`;
}
