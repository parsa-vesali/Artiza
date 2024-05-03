import React from 'react'
import TopBar from '../Components/TopBar'
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import Categoris from '../Components/Categoris'
import Discount from '../Components/Discount'
import PupularProduct from '../Components/PupularProduct'


export default function Home() {
    return (
        <>
            <TopBar />
            <NavBar />
            <Header />
            <Categoris />
            <Discount />
            <PupularProduct />
        </>
    )
}
