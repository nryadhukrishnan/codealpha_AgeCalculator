document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let dob = new Date(document.getElementById('dob').value);
  let now = new Date();

  let yearDiff = now.getFullYear() - dob.getFullYear();
  let monthDiff = now.getMonth() - dob.getMonth();
  let dayDiff = now.getDate() - dob.getDate();
  let hourDiff = now.getHours() - dob.getHours();

  // Adjust for negative month or day differences
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      yearDiff--;
      monthDiff += (monthDiff < 0) ? 12 : 0;
  }

  if (dayDiff < 0) {
      monthDiff--;
      dayDiff += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Add days of the previous month
  }

  let ageInYears = yearDiff;
  let ageInMonths = monthDiff;
  let ageInDays = dayDiff;
  let ageInHours = hourDiff < 0 ? 24 + hourDiff : hourDiff;

  document.getElementById('result').innerHTML = `
      <span class="highlight">${ageInYears} years</span><br>
      <span class="age-details">${ageInMonths} months, ${ageInDays} days, and ${ageInHours} hours old.</span>`;
});

function refreshPage() {
  location.reload();
}
