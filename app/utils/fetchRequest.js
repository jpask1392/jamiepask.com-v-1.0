import { pageQuery } from '../graphql/pages';
import { server } from '../config'

const keystonePageRequest = async (pageId) => {
  
  // Call an external API endpoint to get posts.
  const res = await fetch(`${ server }/admin/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({query: pageQuery(pageId)}),
  });

  const pageData = await res.json();

  // handle the blocks data
  // serialize, cleanse etc
  const handleBlocks = (page) => {
    // remove any null values
    page.blocks.forEach((block) => (
      Object.keys(block).forEach((key) => (block[key] == null) && delete block[key]))
    )
    return page;
  }

  const page = await handleBlocks(pageData.data.Page)

  return page;
}

export default keystonePageRequest;
