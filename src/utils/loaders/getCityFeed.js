export async function getCityFeed(token) {
  const response = await fetch(`https://api.waqi.info/feed/here/?token=${token}`);
  return response.json();
}
