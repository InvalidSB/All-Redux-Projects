import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'

import {fetchUsers} from '../redux'

function UserContainer() {
    const userData = useSelector(state => state.user)
    
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(fetchUsers())
 }, [])

    return userData.loading ? 
     (<h1>Loading</h1>) :
    (
        <div>
            {userData.map(user=>{
                <h1></h1>
            })}
        </div>
    )
}

export default UserContainer
