export const DateFormater = (date) => {
  if (!date) return ""; // Return an empty string if the date is invalid or empty

  console.log(date, "date");

  const d = new Date(date);

  // Check if the date is valid
  if (isNaN(d.getTime())) {
    return "Invalid Date";
  }

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Ensure month is 2 digits
  const day = String(d.getDate()).padStart(2, "0"); // Ensure day is 2 digits

  return `${day}/${month}/${year}`; // Return formatted YYYY-MM-DD date
};
