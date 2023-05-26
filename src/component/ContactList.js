import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {

  const contactList = useSelector(state => state.contactList)
  const searchList = useSelector(state => state.searchList)
  const keyword = useSelector(state => state.keyword)

  // useEffect(() => {

  //   console.log('CON', contactList)
  //   console.log('CON', searchList)
  //   console.log('CON', keyword)
  // }, [contactList])

  // useEffect(() => {

  //   console.log('SEA', contactList)
  //   console.log('SEA', searchList)
  //   console.log('SEA', keyword)

  // }, [searchList])

  return (
    <div className='contact-list'>
      <SearchBox />

      { keyword === ''
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

      {/* {contactList.map(item => (
        <ContactItem item={item}/>
      ))} */}

    </div>
  )
}

export default ContactList 