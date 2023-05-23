import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {

  const contactList = useSelector(state => state.contactList)
  const searchList = useSelector(state => state.searchList)
  const keyword = useSelector(state => state.keyword)



  return (
    <div className='contact-list'>
      <SearchBox />

      {keyword !== '' && searchList.length === 0
        ? alert('검색결과가 없습니다.')
        : keyword === '' && searchList.length === 0
          ? (
            contactList.map(item => (
              <ContactItem item={item} />
            ))
          )
          :
          (
            searchList.map(item => (
              <ContactItem item={item} />
            ))
          )
      }

      {/* {filteredList.map(item => (
        <ContactItem item={item}/>
      ))} */}

    </div>
  )
}

export default ContactList 