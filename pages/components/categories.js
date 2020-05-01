import Link from 'next/link';
import Product from './product'


class Categories extends React.Component {

    render() {

        const data = (this.props.categories);
        const listItems = data.map((category) =>
            <div key={category.category_id} >

                <ul>
                    <li>
                        {/* <Link href=""  >
                            <Category category={category} />
                        </Link> */}
                        <Product category={category} />

                        <Link href='/components/clp/[products]' as={'/components' + category.slug}>

                            <a>
                                <h5>{category.meta_title}
                                </h5>
                            </a>
                            {//this can be any of the variables
                            }
                        </Link >
                    </li>
                </ul>
                <style jsx>{
                    `
            ul {
                list-style: none;

            }           `
                }
                </style>
            </div >
        );

        return (
            <div>
                {listItems}
            </div>
        );

    }


}

export default Categories

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