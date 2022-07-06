import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/Home/NavigationBar/NavigationBar';
import Header from '../components/Home/Header/Header';
import Products from '../components/Home/Products/Products';
import axios from 'axios';
import Footer from '../components/Home/Footer/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
    const [productsData, setProductData] = useState([]);
    useEffect(() => {
        async function loadSingleData() {
            const res = await axios.get(`/api/products`)
                .catch(err => console.log(err))
            setProductData(res?.data)
        }
        loadSingleData()
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Bit Brothers</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <main>
                <NavigationBar />
                <Header />
                <div className='max-w-[1280px] mx-auto'>
                    <Products productsData={productsData} />
                </div>
                <Footer />

            </main>
        </div>
    )
}