try {
  const response = await fetch("https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '91328b0152msh40e44c72fb75cb8p1afc12jsn7bdb78e8f6cc',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}