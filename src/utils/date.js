const WEDNESDAY_INDEX = 3;
const DAYS_OF_WEEK = 7;

function getNextWednesday() {
  const today = new Date();
  const todayIndex = today.getDay();
  const daysUntilNextWednesday =
    (WEDNESDAY_INDEX - todayIndex + DAYS_OF_WEEK) % DAYS_OF_WEEK ||
    DAYS_OF_WEEK;

  const nextWednesday = new Date(today);
  nextWednesday.setDate(today.getDate() + daysUntilNextWednesday);

  return formatDate(nextWednesday);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

module.exports = {
  getNextWednesday,
};

if (process.env.NODE_ENV === "test") {
  module.exports._private = {
    formatDate,
  };
}
