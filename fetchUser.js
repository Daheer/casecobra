const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer cvPkfEl3czvdBPYxguTPlOUZ2HuXlAGkHG0KYHg95HPHWXwbLdrhe' // Replace with your access token
};

fetch('https://casecobra4deedax.kinde.com/oauth2/user_profile', { // Replace with your subdomain
  method: 'GET',
  headers: headers
})
.then(function(res) {
  return res.json();
})
.then(function(body) {
  console.log(body);
})
.catch(function(error) {
  console.error('Error:', error);
});

