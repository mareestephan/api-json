import Link from 'next/link';
import Category from './category'


class Categories extends React.Component {

    render() {
        const data = (this.props.categories.pages_to_create);
        const listItems = data.map((category, index) =>
            <div>

                <ul>
                    <li>

                        <Category category={category} />
                        <p>{index}</p>


                        {/* <Link href={category.slug}>
                            <a >{category.slug}</a>
                        </Link>

                        <p>{category.slug}</p> */}

                    </li>
                    {//Categories component spoeg n category link uit.
                        // Daai link neem jou na die products page met daai spesifieke products.
                        //Afhangend van die array key. Die array key gee dan toegang na die regte object.
                    }

                </ul>

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
                {listItems}

            </div>
        );
    }
}

export default Categories