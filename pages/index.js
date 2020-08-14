import React from 'react'
import png from 'assets/images/1.jpg'

export default function Index() {
    return (
        <div>
            <h1>标题</h1>
            <p>段落</p>
            <img src={png} alt={"png"}/>
        </div>
    )
}
