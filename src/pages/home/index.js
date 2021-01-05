import React,{useState, useEffect} from 'react';
import {Component} from './style';
import Card from '../../components/card';
import Header  from '../../components/header';
// import api from '../../services/api';
import response  from '../../utils/menu';

const Dashboard = () => {
    const [menu, setMenu] = useState();

    // const  data = async () => {
    //     const response = await api.get();
    //     setMenu(response.data)
    //     console.log(response);
    // }

    useEffect( ()=>{
        //   data();
        setMenu(response);

    },[])

    return (     
        <>
            <Header/>     
            <Component>
                <section> 
                    
                   {    menu && 
                       
                            menu[0]?.products.map((me)=>(
                                    <Card menu={me}/>
                            )) 
                        
                   }  
                </section>
                
                <section> 
                   {    
                        menu && 
                        menu[1]?.products.map((me)=>(
                            <Card menu={me}/>
                        )) 
                   }  
                </section>

            </Component>
        </>

        
    )       
};

export default Dashboard;
