// import Link from 'next/link';

// class Products extends React.Component {

//     render() {
//         const data = (this.props.products);
//         const listItems = data.map((product) =>
//             <div>

//                 <ul>
//                     <li>
//                         <Link href={product.product_link}>
//                             <a>
//                                 {product.product_link}  </a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href={product.product_link}>
//                             <a>
//                                 {product.price}  </a>
//                         </Link>
//                     </li>
//                     <li
//                         key={product.product_name}>{product.product_name}
//                         <br />
//                         <Link href={product.product_name}>
//                             <a>
//                                 {product.product_name}  </a>
//                         </Link>

//                     </li>
//                     <li
//                         key={product.product_desc}>{product.product_desc}

//                     </li>

//                     <li>
//                         <Link href={product.product_image}>
//                             <a><img src=
//                                 {product.product_image} /> </a>
//                         </Link>

//                     </li>


//                 </ul>
//                 <style jsx>{
//                     `
//             ul {
//                 list-style: none;

//             }
//             `
//                 }

//                 </style>
//             </div >
//         );

//         return (
//             <div>
//                 {listItems}

//             </div>
//         );
//     }
// }

// export default Products