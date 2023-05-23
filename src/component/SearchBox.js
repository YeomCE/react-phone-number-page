
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const contactList = useSelector(state => state.contactList)
    const dispatch = useDispatch();
    

    const searchButton = (e) => {
        e.preventDefault();
        
        let searchValue = contactList.filter(item => {
            return item.name.includes(keyword) || item.phoneNumber.includes(keyword)
        })
        console.log(searchValue)

        dispatch({type: 'SEARCH_CONTACT', payload : {searchValue}})
        dispatch({type: 'KEYWORD', payload : {keyword}})

    }


    return (
        <div className='search-box'>
            <form onSubmit={searchButton}>
                <label>검색</label> 
                <div className='search-bar'>
                    <input type="text" placeholder="이름 또는 번호를 입력해주세요"
                        onChange={(e) => setKeyword(e.target.value)} />
                    <button variant="primary" type="submit">검색</button>
                </div>
            </form>
            <p>전체보기를 원하시면 검색창을 비운 후 검색을 클릭해주세요.</p>
        </div>
    )
}

export default SearchBox