import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Spinner({path= 'login'}) {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => (--prevValue))
        }, 1000)
        count === 0 && navigate(`/${path}`)
        return () => clearInterval(interval)
    }, [count, navigate, path])

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '65vh' }}>
            <h1>Redirecting to you in {count} second</h1>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
