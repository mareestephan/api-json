export default () => {

    <p>Hello World 1 (imported dynamically) </p>

    const data = (this.props.category.matched_products);

    const listItem = data.map((productGold, category_id) =>
        <div key={productGold.product_id}>


            {/* <ul>
                    <li>
                        <p>{productGold.product_desc}</p>
                        <p>{productGold.gender}</p>

                    </li>
                </ul> */}
            {/* <ul>
                    <li>
                        <Link href={product.product_link}>
                            <a>
                                {product.product_link}  </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={product.product_link}>
                            <a>
                                {product.price}  </a>
                        </Link>
                    </li>
                    <li
                        key={product.product_name}>{product.product_name}
                        <br />
                        <Link href={product.product_name}>
                            <a>
                                {product.product_name}  </a>
                        </Link>

                    </li>
                    <li
                        key={product.product_desc}>{product.product_desc}

                    </li>

                    <li>
                        <Link href={product.product_image}>
                            <a><img src=
                                {product.product_image} /> </a>
                        </Link>

                    </li>


                </ul> */}
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
