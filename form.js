import axios from 'axios';
async function getRssFeed() {
  try {
    const response = await axios.get('https://votre-point-de-terminaison-api.vercel.app/api/messages');
    const messages = response.data;
    // Faites quelque chose avec les messages ici, comme les afficher sur votre page web
  } catch (error) {
    console.error(error);
  }
}
getRssFeed();