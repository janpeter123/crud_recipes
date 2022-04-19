var UserProfile = (function () {
  var full_name = "";
  var country = "";
  var username = "";

  var getName = function () {
    return full_name; // Or pull this from cookie/localStorage
  };

  var setName = function (name) {
    full_name = name;
    // Also set this in cookie/localStorage
  };

  var getCountry = function () {
    return country;
  };

  var setCountry = function (country_name) {
    country = country_name;
  };

  var getUsername = function () {
    return username;
  };

  var setUsername = function (user_name) {
    username = user_name;
  };
  return {
    getName: getName,
    setName: setName,
    getCountry: getCountry,
    setCountry: setCountry,
    getUsername: getUsername,
    setUsername: setUsername,
  };
})();

export default UserProfile;
