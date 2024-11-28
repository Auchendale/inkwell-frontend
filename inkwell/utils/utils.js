var flagGetter = function (country) {
  var countryCode = "";
  if (country === "Australia") {
    countryCode = "AU";
  }
  if (country === "United Kingdom") {
    countryCode = "GB";
  }
  if (country === "Norway") {
    countryCode = "NO";
  }
  if (country === "United States of America") {
    countryCode = "US";
  }
  if (country === "India") {
    countryCode = "IN";
  }
  if (country === "Peru") {
    countryCode = "PE";
  }
  if (country === "Germany") {
    countryCode = "DE";
  }
  if (country === "South Africa") {
    countryCode = "ZA";
  }
  if (country === "Hong Kong") {
    countryCode = "HK";
  }
  return countryCode;
};
var distanceCalc = function (longitude1, latitude1, longitude2, latitude2) {
  var radius = 6371;
  var lat1 = (latitude1 * Math.PI) / 180;
  var lat2 = (latitude2 * Math.PI) / 180;
  var disLats = ((latitude2 - latitude1) * Math.PI) / 180;
  var disLons = ((longitude2 - longitude1) * Math.PI) / 180;
  var a =
    Math.sin(disLats / 2) * Math.sin(disLats / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(disLons / 2) *
      Math.sin(disLons / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = radius * c;
  return d; // distance in km
};

const formatDate = (dateTime) => {
  const splitDateTime = dateTime.split("T");
  const splitDate = splitDateTime[0].split("-");
  const formattedDate = splitDate.reverse().join("-");
  return formattedDate;
};

const formatTime = (dateTime) => {
  const splitDateTime = dateTime.split("T");
  const time = splitDateTime[1].slice(0, 5);
  if (Number(time.substring(0, 2)) < 12) {
    return time + " am";
  } else return time + " pm";
};

module.exports = {
  flagGetter: flagGetter,
  distanceCalc: distanceCalc,
  formatDate,
  formatTime,
};
