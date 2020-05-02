import React, { Component } from 'react'
import Link from 'next/link'




// class Product extends React.Component {
function Appels(props) {
    //  render() {

    console.log(props)
    const data = (this.props.category.matched_products);

    const listItem = data.map((productGold, category_id) =>


        <div key={productGold.product_id}>

            <li>
                <p>{productGold.product_desc}</p>
            </li>
            <style jsx>{
                `
            ul {
                list-style: none;

            }
            `
            }

            </style>
        </div >
    );

    return (
        <div>
            {listItem}

        </div>
    );
}



export default Appels


