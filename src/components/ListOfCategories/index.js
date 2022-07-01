import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './style.js'

export const ListOfCategories = () =>  {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch('https://petgram-server-frc.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
    }
    fetchCategories()
  },[])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed && 'fixed'}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item> )
      }
    </List>
  )

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  )
}
