import React, { Component } from 'react'
import Link from 'next/link'




export class Category extends Component {
    render() {



        return (


            <div>
                <ul>
                    <li>

                    </li>
                </ul>

                {/* Ek bou n function wat run. Wanneer daar geclick word op die link dan vind hy die category_id en spoeg sy products uit.  */}

                {/* handleClick = (e, data) => {
                    // access to e.target here
                    console.log(data);
                }
                
<input type="checkbox" value={data.id} defaultChecked={false} onClick={((e) => this.handleClick(e, data))} /> */}


            </div>
        )


    }
}

export default Category
