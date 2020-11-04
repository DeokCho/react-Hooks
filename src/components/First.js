import React, {useState} from 'react'

function First() {
    const [like, setLike ] = useState(false)
    return (
        <div>
            <button onClick={()=>setLike(!like)}>Like</button>
        </div>
    )
}

export default First
