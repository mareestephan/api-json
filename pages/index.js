import Layout from './components/layout'
import Fetch from 'isomorphic-unfetch'
// import Products from './components/products'
import Categories from './components/categories'
import Link from 'next/link'

const Index = (props) => (

  <Layout>
    <div>
      <h1>Appels{props.categories.client_name}</h1>


      <Categories categories={props.categories} />

      {/* <Products products={props.products} /> */}



    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  // const res = await fetch('http://www.json-generator.com/api/json/get/cqEcqbNvvS?indent=2');
  // const res = await fetch('http://www.json-generator.com/api/json/get/ckeElWByRe?indent=2');
  const res = await fetch('http://www.json-generator.com/api/json/get/bVmIFhMGrm?indent=2');
  const data = await res.json();

  return {
    categories: data.pages_to_create
  }

}

export default Index