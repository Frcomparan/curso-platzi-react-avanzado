import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './style.js'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCategories = async () => {
      const response = await window.fetch('https://petgram-server-frc.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
      setLoading(false)
    }
    fetchCategories()
  },[])

  return { categories, loading }
}

export const ListOfCategories = () =>  {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading 
        ? <Item key={loading}><Category /></Item> 
        : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item> )
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
