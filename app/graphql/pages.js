import { grid_layout } from './grid_layout';
import { featured_project_layout } from './featuredProjects';
import { two_column_layout } from './twoColumn';

export const pageQuery = (page_id) => (`
  query {
    Page(where: {id: "${page_id}"}) {
      title
      cta_link
      blocks {
        ${ grid_layout }
        ${ two_column_layout }
        ${ featured_project_layout }
      }
    }
  }
`);
