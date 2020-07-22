/**
 * Default page layout
 */

import Header from '../components/header'
import PageHeader from '../components/pageHeader'
import GridLines from '../components/gridLines'
import Footer from '../components/footer'

const AppLayout = (props) => {
  return (
  <>
    <GridLines />
    <Header />
    <PageHeader data={props.data}/>
    {props.children}
    <Footer />
  </>
)};

export default AppLayout;
