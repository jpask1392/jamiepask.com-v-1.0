/**
 * Default page layout
 */

import Header from '../components/header'
import PageHeader from '../components/pageHeader'
import GridLines from '../components/gridLines'
import Footer from '../components/footer'
import Head from 'next/head'

const AppLayout = (props) => {
  return (
  <>
    <Head><title>{props.title || props.data.title}</title></Head>
    <GridLines />
    <Header />
    <PageHeader data={props.data}/>
    {props.children}
    <Footer />
  </>
)};

export default AppLayout;
