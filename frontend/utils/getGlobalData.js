// import { pageQuery } from '../graphql/pages';
// import { server } from '../config'
import getInstagramData from './getInstagramData';

const getGlobalData = async () => {
  
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:1337/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `
        { 
          global {
            footer {
              header
              cta_header
              cta_link
              cta_text
              footer_text
            }
          } 
        }
      `
    }),
  });

  const globalData = await res.json();
  const instagramData = await getInstagramData();
  // const join = {...globalData.data, instagram: instagramData};
  // console.log("join", join)

  return { ...globalData.data, instagram: instagramData };
}

export default getGlobalData;
