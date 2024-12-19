import React, { useState } from 'react'
import ItemCard from './ItemCard'

function Items() {

    // get from back
    // state parent 
    // one way date flow


    function getData(data) {
        console.log(data);
    }

    let [arr, setArr] = useState([
        { title: "Smart watch", img: "https://2b.com.eg/media/wysiwyg/December_2024/bundles.png" },
        { title: "Labs", img: "https://2b.com.eg/media/wysiwyg/May_2024/laptops2.png" },
        { title: "Phones", img: "https://2b.com.eg/media/wysiwyg/May_2024/Headphones2.png" },
        { title: "TVS", img: "https://2b.com.eg/media/wysiwyg/May_2024/tvs2.png" }
    ])


    return (
        <div>
            {
                arr.map((item) => {
                    return <ItemCard fn={getData} title={item.title} img={item.img} />
                })
            }


        </div>
    )
}

export default Items