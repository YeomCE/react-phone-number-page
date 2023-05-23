import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ContactItem = ({item}) => {

    const contactList = useSelector(state => state.contactList)
    const searchList = useSelector(state => state.searchList)

    const dispatch = useDispatch();

    const deleteButton =(e)=>{
        let deleteName = e.target.previousSibling.firstChild.innerHTML;
        let deleteNumber = e.target.previousSibling.lastChild.innerHTML;
        let deleteNumberContactList = contactList.filter((item)=>{
            return item.name !== deleteName || item.phoneNumber !== deleteNumber
        })
        let deleteNumberSearchList = searchList.filter((item)=>{
            return item.name !== deleteName || item.phoneNumber !== deleteNumber
        })
        dispatch({type: 'DELETE_CONTACT', payload : {deleteNumberContactList, deleteNumberSearchList}})
    }

    return (
        <div className='contact-item'>
            <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg' alt='' />
            <div className='info-box'>
                <div className='info'>
                    <div>{item.name}</div>
                    <div>{item.phoneNumber.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, "")}</div>
                </div>
                <button onClick={deleteButton}>삭제</button>
            </div>
        </div>
    )
}

export default ContactItem