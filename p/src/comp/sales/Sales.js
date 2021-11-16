import { StylesProvider } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import Addsales from './Addsales'
import Stockupdate from './Stockupdate'
import styles from './sale.module.css'

export default class  Sales extends Component {
    
    constructor(){
        super();
        this.state={
            data:[],
            profit:[],
            
        };
       
        
        
    }



    componentDidMount(){                 //get data from backend
        axios.get('http://localhost:3001/receiveddata',{
            params:{user:localStorage.getItem('user')}
        })
        .then(response=>{
            const data=response.data
            this.setState({data})
            
            
        })

    }

   

   
    
    

    

    render(){
        
    return (
        <div className={styles.desktopview}>
            <h2>Sale Update</h2>
            {this.state.data.map((item)=>(    //map the data 
                <Addsales 
                key={item.product_id}
                product_id={item.product_id}
                product_name={item.product_name}
                product_price={item.product_price} 
                user={item.user}
                
                
                />
            ))}

            <h2>Stock Update</h2>
            {this.state.data.map((item)=>(    //map the data 
                <Stockupdate 
                key={item.product_id}
                product_id={item.product_id}
                product_name={item.product_name}
                product_price={item.product_price} 
                user={item.user}
                
                
                />
            ))}
            
            
           
        </div>
    )
            }
}
