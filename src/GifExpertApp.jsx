import {useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
        // setCategories={setCategories}
        onNewCategory={ev => onAddCategory(ev)}
        />
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
        }
    </>
  )
}
