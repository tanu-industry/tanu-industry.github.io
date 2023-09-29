var myData = [
  ["Residential", "Villa"],
  ["Residential", "Apartment"],
  ["Residential", "Regular Home"],
  ["Commercial", "Bank"],
  ["Commercial", "Office"],
  ["Commercial", "Hospital"],
  ["Commercial", "Library"],
  ["Commercial", "Store"],
  ["Commercial", "Other"],
];

// var karnataka = [
//   "Bagalkot",
//   "Ballari",
//   "Belagavi",
//   "Bengaluru Rural",
//   "Bengaluru Urban",
//   "Bidar",
//   "Chamarajanagara",
//   "Chikkaballapura",
//   "Chikkamagaluru",
//   "Chitradurga",
//   "Dakshina Kannada",
//   "Davanagere",
//   "Dharwada",
//   "Gadaga",
//   "Hassan",
//   "Haveri",
//   "Kalaburagi",
//   "Kodagu",
//   "Kolar",
//   "Koppala",
//   "Mandya",
//   "Mysuru",
//   "Raichuru",
//   "Ramanagara",
//   "Shivamogga",
//   "Tumakuru",
//   "Udupi",
//   "Uttara Kannada",
//   "Vijayanagara",
//   "Vijayapura",
//   "Yadagiri",
// ];

const myDropdown = (data, lvl1Filter) => {
  const filteredArray = myData.filter((i) => i[0] === lvl1Filter);

  const myHouse = [];
  filteredArray.forEach((i) => myHouse.push(i[1]));

  const buildingType = document.getElementById("building_type");

  buildingType.innerHTML = "";

  myHouse.forEach((house) => {
    const option = document.createElement("option");
    option.textContent = house;
    buildingType.appendChild(option);
  });
};

// const cityDropdown = () => {
//     const yourCity = document.getElementById("your_city");
    
//     yourCity.innerHTML = "";

//     karnataka.forEach((place) => {
//         const cityOption = document.createElement("option");
//         cityOption.textContent = place;
//         yourCity.appendChild(cityOption);
//     })
// }

const applyDropdown = () => {
  const selectedProjectType = document.getElementById("project_type").value;
  myDropdown(myData, selectedProjectType);
};

// cityDropdown();

document
  .getElementById("project_type")
  .addEventListener("change", applyDropdown);
// document.addEventListener("DOMContentLoaded", );
