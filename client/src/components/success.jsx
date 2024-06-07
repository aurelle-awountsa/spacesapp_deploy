import React from 'react'

function Success(massage) {
    return (
        <div>
            <div className='alert alert-success' role='alert'>
                {massage}
            </div>
        </div>
    )
}

export default Success