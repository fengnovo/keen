const axios = require('axios');

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;


const oauth = async req => {
  const requestToken = req.query.code;
  console.log('authorization code:', requestToken);

  const tokenResponse = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${requestToken}`,
    headers: {
      Accept: 'application/json'
    }
  });

  const accessToken = tokenResponse.data.access_token;
  console.log(`access token: ${accessToken}`);

  const result = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  });
  console.log(result);

  return result.data;
  
};

export default async (req, res) => {
  try {
    const results = await oauth(req);
      
    res.redirect(`/welcome.html?oauthData=${JSON.stringify(results)}`);
  } catch (e) {
    const response = e.response
    res.status(response.statusCode).json(response.body)
  }
}
