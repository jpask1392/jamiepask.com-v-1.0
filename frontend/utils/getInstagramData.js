/**
 * 
 * @param {array} fields array of wanted fields
 */
const getInstagramData = async () => {
  const fields = ["id", "media_type", "media_url", "username", "timestamp", "caption"];
  const access_token = 'IGQVJYRGRYd0tDNmk3TUROZAXpUT1dUMUIzZA043NHFiZAlFXWHhkSEdqSUpIdjRrRUtOMEI0QnpIR2MxclpTYTN6UnJ5TG5wUERNc1Q2aVdBRlNhTXptM0J3UXgzQ0NwbDFISVkyaU85dHEtcHk5MVNuXwZDZD';
  
  const res = await fetch(`https://graph.instagram.com/me/media?fields=${fields.join(',')}&access_token=${access_token}&limit=5`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
  });

  const data = await res.json();

  return data;
}

export default getInstagramData;