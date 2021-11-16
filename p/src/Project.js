import React from 'react'
import Header from './comp/header/Header'
import Action from './comp/actions/Action'

export default function Project(props) {
    return (
        <div>
            <Header loginstat={props.loginstat} setloginstat={props.setloginstat} />
            <Action />
        </div>
    )
}
