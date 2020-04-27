import Layout from './components/layout'
import Fetch from 'isomorphic-unfetch'
// import Products from './components/products'
import Categories from './components/categories'

const Index = (props) => (

  <Layout>
    <div>
      <h1>Appels{props.categories.client_name}</h1>
      <p>Products page</p>
      <Categories categories={props.categories} />

      {/* <Products products={props.products.pages_to_create} /> */}
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  // const res = await fetch('http://www.json-generator.com/api/json/get/cqEcqbNvvS?indent=2');
  const res = await fetch('http://www.json-generator.com/api/json/get/ckeElWByRe?indent=2');
  const data = await res.json();

  return {
    categories: data
  }

}

export default Index