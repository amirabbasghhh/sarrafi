import React,{useEffect, useState} from 'react';
import { GetData } from '../GetData';
import Loader from './Loader';
import styles  from'../Index.module.css'
import CoinItem from './CoinItem';


const Home = () => {
    const[coins,setCoins]=useState([])
    const[search,setSearch]=useState('')
    useEffect(()=>{
          const fetchApi=async()=>{
            const res=await GetData();
            setCoins(res);
          }
          fetchApi()
    },[])
    const searchhandler=(e)=>{
        setSearch(e.target.value)
    }
    const searchCoins=coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div >
            <div className={styles.inp}><input type="text" placeholder='serach' value={search} onChange={searchhandler} /></div>
            {coins.length ? 
               <div className={styles.total}>
                {searchCoins.map(item => <CoinItem {...item} key={item.id} />)}
               </div>
                :
                <Loader/>
             
            }
            
        </div>
    );
};

export default Home;