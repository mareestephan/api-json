import React, { Component } from 'react'
import Link from 'next/link'

export class Category extends Component {
    render() {
        return (
            <div>

                <Link href={this.props.category.slug}>
                    <a ><h5>{this.props.category.meta_title}</h5></a>
                    {//this can be any of the variables
                    }
                </Link >
                <h3>Appels</h3>

            </div>
        )
    }
}

export default Category
