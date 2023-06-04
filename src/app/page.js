"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Cards/Cards"
import Search from "./Search/Search"
import styles from "./page.module.css"

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res => setProducts(res.data.Search))
    .catch(err => console.log(err))
  },[])

  return (
    <main className={styles.container}>
      <Search/>

      {
        products.length > 0 && products.map((item, idx) => <Card product = {item} key = {idx}/>)
      }
    </main>
  )
}