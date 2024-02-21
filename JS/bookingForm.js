const today = new Date().toISOString().split("T")[0];
booking_date.value = today;
booking_date.min = today;

const hour = new Date().toISOString();
console.log(hour);
