import React from 'react'

export default function Alert(props) {
    return (
        props.msg && <div className={`alert alert-${props.type} alert-dismissible`} role="alert">
      {props.msg}
    </div>
    )
}
