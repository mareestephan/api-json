// import { useRouter } from 'next/router'

// import Product from '../../components/product'
// import React, { Component } from 'react'


// // const Appels = dynamic(() => import('../../components/product'))


// export default () => {
//     const router = useRouter()

//     // const post = posts[router.query.id]

//     return (
//         <>

//             <Appel />
//             <h1>Appel en Pere</h1>
//         </>
//     )
// }
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import Link from 'next/link'
import listItems from '../categories'




// import Appels from '../../index'


function Product() {


    const alertName = () => {
        alert(' John Doe ');
    };
    const router = useRouter()


    // const listItems = perske.map((category) =>
    //     <div key={category.category_id} >

    //         <ul>
    //             <li>

    //                 <Link href='/components/clp/[products] ' as={'/components' + category.slug} >

    //                     <a>
    //                         <h5>{category.meta_title}
    //                         </h5>
    //                     </a>

    //                 </Link >
    //             </li>
    //         </ul>
    //         <style jsx>{
    //             `
    //         ul {
    //             list-style: none;

    //         }           `
    //         }
    //         </style>
    //     </div >
    // );



    return (
        <div>
            <h3> This is a Functional Component </h3>
            <button onClick={alertName}> Alert </button>
        </div>
    );


};


export default Product;
