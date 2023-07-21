import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ContactForm = () => {


    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [index, setIndex] = useState(0)
    const dispatch = useDispatch();

    const addContact =(e)=>{
        if(name === '' || phoneNumber === ''){
            e.preventDefault();
            alert('이름과 전화번호를 모두 입력해주세요')
            return
        }
        else{
            e.preventDefault();
            dispatch({type: 'ADD_CONTACT', payload : {name, phoneNumber, index}})
            setIndex(index+1)
        }
    }

    return (
        <div className='contact-form'>
            <form onSubmit={addContact}>
                <label>이름</label>
                <input
                    type="text"
                    placeholder="이름을 입력해주세요"
                    onChange={(e) => setName(e.target.value)}
                />
                <label>전화번호</label>
                <input
                    type="number"
                    placeholder="전화번호를 입력해주세요"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button variant="primary" type="submit">추가</button>
            </form>
        </div>
    )
}

export default ContactForm