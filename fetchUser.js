async function getToken() {
  try {
    const response = await fetch(`https://casecobra.kinde.com/oauth2/token`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        audience: "https://casecobra4deedax.kinde.com/api",
        grant_type: "client_credentials",
        client_id: "3c00eeb55a974988b4a71183220f0c40",
        client_secret: "cvPkfEl3czvdBPYxguTPlOUZ2HuXlAGkHG0KYHg95HPHWXwbLdrhe"
      })
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

getToken();
