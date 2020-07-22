/**
 * Page used for demoing new components
 */
import AppLayout from "../layouts/app.jsx";
import keystonePageRequest from '../utils/fetchRequest'

const Demo = ({page}) => (
  <AppLayout data={page}>
    <div>Hello</div>
  </AppLayout>
);

export default Demo;

// This function gets called at build time on server-side.
// use function to collect data and populate component
export async function getStaticProps() {
  // pass page ID to keystone page request
  const page = await keystonePageRequest("5ec2a9710c53c998a1ca2bfc");
  // Component will receive `blocks` as a prop at build time
  return {
    props: {
      page,
    },
  }
}

