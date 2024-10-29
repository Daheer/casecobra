const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhOjc5OjdmOjFiOjdjOjZlOjdkOmE0OjY4OmVkOjBiOjNmOjM4OmRjOjM2OmUxIiwidHlwIjoiSldUIn0.eyJhcHBsaWNhdGlvbl9wcm9wZXJ0aWVzIjp7ImtwX2FwcF9uYW1lIjp7InYiOiJjYXNlY29icmEifX0sImF1ZCI6WyJodHRwczovL2Nhc2Vjb2JyYTRkZWVkYXgua2luZGUuY29tL2FwaSJdLCJhenAiOiIzYzAwZWViNTVhOTc0OTg4YjRhNzExODMyMjBmMGM0MCIsImV4cCI6MTczMjU3MTY1NCwiZ3R5IjpbImNsaWVudF9jcmVkZW50aWFscyJdLCJpYXQiOjE3MzAxNTI0NTUsImlzcyI6Imh0dHBzOi8vY2FzZWNvYnJhNGRlZWRheC5raW5kZS5jb20iLCJqdGkiOiI4MTU5MTFjMi0xNGNhLTQxMWUtODYzMS02NGRjZjc5YzQ1MzciLCJzY29wZSI6ImNyZWF0ZTphcGlzIiwic2NwIjpbXSwidiI6IjIifQ.UZ5je4D_zMEQQuUho5d-y7gfWz7kkczp4dc_mgyCf0TOE5PqnBFm5-5KYadjoSbLxdTXsC42dBOjxVXKBIMP5cgQrhS7K1qhQ9nSbg0iHlnalF9Jfgt5mYrEcVUr-GRQP11hWY-ww3f4E684yS9x9cJILyC5XOFr-Qio9gg1tJkfkjd9vxUUjm4v7wA57HcqWb78S-XqvQOJeyPrmFI04HoMoVcUR-AhGSYwJu9dyi8fo7pKI8Hfbsrr54-U0KIr9tmvX7A9QE-We9AI867_qBXyaxES75InAOn3vbWlWrA4GwH04PGdrAfuUe1AZA2SsnJrtXLrHPxQxAkRCgjtFQ'
};

fetch('https://casecobra4deedax.kinde.com/oauth2/user_profile',
{
  method: 'GET',

  headers: headers
})
.then(async function(res) {
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Message:", text);
    const respones = await res.json();
    return respones;
}).then(function(body) {
    console.log(body);
});
