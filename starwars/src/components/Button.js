import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Button(props) {
    return (
        <div>
            <Button onClick={() => props.updateImage(anyDate)}>{props.labelt}</Button>
        </div>
    )
}

