document.getElementById("searchBtn").addEventListener("click", () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!from || !to) {
    resultsDiv.textContent = "Please select both Departure and Destination airports.";
    return;
  }

  // Generate Google Flights links
  const returnLink = `https://www.google.com/travel/flights?q=Flights from ${encodeURIComponent(from)} to ${encodeURIComponent(to)} return`;
  const oneWayAB = `https://www.google.com/travel/flights?q=Flights from ${encodeURIComponent(from)} to ${encodeURIComponent(to)}`;
  const oneWayBA = `https://www.google.com/travel/flights?q=Flights from ${encodeURIComponent(to)} to ${encodeURIComponent(from)}`;

  resultsDiv.innerHTML = `
    <p>Best Options:</p>
    <ul>
      <li><a href="${returnLink}" target="_blank">Return ticket</a></li>
      <li><a href="${oneWayAB}" target="_blank">Two one-way: ${from} → ${to}</a></li>
      <li><a href="${oneWayBA}" target="_blank">Two one-way: ${to} → ${from}</a></li>
    </ul>
  `;
});

