import React from 'react'
import { Category } from '../Category'
import { List, Item } from './style.js'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () =>  (
  <List>
    {
      categories.map(category => <Item key={category.id}><Category {...category} /></Item> )
    }
  </List>
)
