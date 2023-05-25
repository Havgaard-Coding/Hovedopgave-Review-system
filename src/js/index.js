// const searchInput = document.getElementById("searcInput");
// const peopleList = document.getElementById("participantsList");

// // Array of people's names (can be fetched from a database or API)
// const allPeople = [
//   "John Doe",
//   "Jane Smith",
//   "David Johnson",
//   "David Johnson",
//   "David Johnson",
//   "David Johnson",
//   "David Johnson",
//   "David Johnson",
//   // Add more names as needed
// ];

// // Function to filter and update the dropdown list options
// function updateOptions(searchTerm) {
//   // Clear existing options
//   participantsList.innerHTML = "";

//   // Filter the array based on the search term
//   const filteredPeople = allPeople.filter((person) =>
//     person.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Create new options for the filtered people
//   filteredPeople.forEach((person) => {
//     const option = document.createElement("li");
//     option.textContent = person;
//     option.addEventListener("click", function () {
//       searchInput.value = person;
//       participantsList.innerHTML = ""; // Hide the dropdown after selection
//     });
//     participantsList.appendChild(option);
//   });
// }

// // Event listener for the search input
// searchInput.addEventListener("input", function (e) {
//   const searchTerm = e.target.value;
//   updateOptions(searchTerm);
// });

// // Event listener to close the dropdown when clicking outside
// document.addEventListener("click", function (e) {
//   if (!e.target.closest(".dropdown")) {
//     participantsList.innerHTML = "";
//   }
// });
