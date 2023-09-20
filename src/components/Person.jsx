import React from 'react'

export default function Person(props) {
    // returnden sonra curly braces içinde yazmamız gerekiyor çünkü returnden sonrası html, öncesi javascript bloğu
    console.log(props);
    return (
        <div>
            Hello my name is {props.name} and my surname is {props.surname} ...
            {props.children}
        </div>
    )
}
