import { StylesProvider } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import Addsales from './Addsales'
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
            
            {this.state.data.map((item)=>(    //map the data 
                <Addsales 
                key={item.product_id}
                product_id={item.product_id}
                product_name={item.product_name}
                product_price={item.product_price} 
                user={item.user}
                ref={this.submitref}
                forinvoicecart={this.props.forinvoicecart}
                client={this.props.client}
                
                />
            ))}

            
            
           
        </div>
    )
            }
}
