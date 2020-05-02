// import Link from 'next/link';
// // import Product from './product'


// class Categories extends React.Component {

//     setState = {
//         appelBoom: [this.props.listItems.category]
//     }

//     render() {
//         console.log(this.state.appelBoom)
//         const data = (this.props.categories);
//         const listItems = data.map((category) =>
//             <div key={category.category_id} >

//                 <ul>
//                     <li>

//                         <Link href='/components/clp/[products] ' as={'/components' + category.slug} >

//                             <a>
//                                 <h5>{category.meta_title}
//                                 </h5>
//                             </a>

//                         </Link >
//                     </li>
//                 </ul>
//                 <style jsx>{
//                     `
//             ul {
//                 list-style: none;

//             }           `
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

// export { default as data } from './categories'
// export default Categories;

// // import Link from 'next/link'

// // const Categories = (props) => (

// //     < div >
// //         <h1>Blog</h1>

// //         <ul>

// //             {
// //                 Object.entries(this.props.categories).map((category) => {
// //                     return (
// //                         <li >

// //                             {console.log(category[0].slug)}

// //                         </li>
// //                     )
// //                 }
// //                 )
// //             }


// //         </ul>
// //     </div >
// // )

// // export default Categories
import Link from 'next/link';
// import Product from './product'


class Categories extends React.Component {

    // state = {
    //     appels: {}
    // }

    render() {

        // const data = (this.props.categories);
        const listItems = this.props.categories.map((category) =>

            <div key={category.category_id} >
                <ul>
                    <li>
                        <Link href='/components/clp/[products] ' as={'/components' + category.slug} >
                            <a>
                                <h5>{category.meta_title}
                                </h5>
                            </a>
                        </Link >
                    </li>
                </ul>
            </div >

        );

        return (

            <div>
                {listItems}
            </div>

        );
        // this.setState({
        //     appels: listItems

        // })


    }

}

export default Categories;


// import Link from 'next/link'

// const Categories = (props) => (

//     < div >
//         <h1>Blog</h1>

//         <ul>

//             {
//                 Object.entries(this.props.categories).map((category) => {
//                     return (
//                         <li >

//                             {console.log(category[0].slug)}

//                         </li>
//                     )
//                 }
//                 )
//             }


//         </ul>
//     </div >
// )

// export default Categories