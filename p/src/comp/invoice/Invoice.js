import axios from 'axios'
import React,{useState,useEffect} from 'react'
import styles from './invoice.module.css'
import Modal from 'react-modal'
import Productcart from './Productcart';
import Generatedinvoice from './Generatedinvoice';
import { TextField } from '@material-ui/core';




export default function Invoice() {

    const [client, setclient] = useState('')
    const [cart, setcart] = useState('')
    const [phone, setphone] = useState(0)
    const [email, setemail] = useState('')
    const [paymentmode, setpaymentmode] = useState('')
    const [cartmodal, setcartmodal] = useState(false)
    const [productdata, setproductdata] = useState([])
    const [tempinvoice, settempinvoice] = useState([])
    const [subtotal, setsubtotal] = useState(0)
    const [cartitems, setcartitems] = useState([])
  
    const list=[];

    useEffect(() => {
        axios.get('http://localhost:3001/receiveddata',{
            params:{user:localStorage.getItem('user')}
        })
        .then(response=>{
            const data1=response.data
            setproductdata(data1)
            console.log('products',productdata)
            
            
        })
    }, [])

    const generate_invoive=()=>{
        axios.post('http://localhost:3001/invoice',{
            
            cart:cart,
            phone:phone,
            email:email,
            paymentmode:paymentmode,
            user:localStorage.getItem('user'),
            client:client
        }).then(()=>{
            console.log('success')
           
        })

        axios.get('http://localhost:3001/newinvoicedata',{
            params:{user:localStorage.getItem('user'),
            client:client}
        })
        .then(response=>{
            const data1=response.data
            settempinvoice(data1)
        })

        axios.get('http://localhost:3001/subtotal',{
            params:{user:localStorage.getItem('user'),
            client:client}
        })
        .then(response=>{
            const data1=response.data
            setsubtotal(data1[0].sum)
            console.log(subtotal)
        })


    }



    return (
        <div className={styles.desktopview}>
            <div className={styles.form1} >
            <TextField id="outlined-basic" label="client name" className={styles.clientname} onChange={(event)=>setclient(event.target.value)} variant="outlined" required />
                
                
                <div className={styles.cart}>
                    <div className={styles.tag1}>CART:  </div>

                    <button className={styles.additem} onClick={()=>setcartmodal(true)}>add items</button>
                </div>

                <Modal isOpen={cartmodal} onRequestClose={()=>setcartmodal(false)} className={styles.cartmodal}>
                {
                 productdata.map(item=>(    //map the data 
                 <Productcart key={item.product_id} product_id={item.product_id} product_name={item.product_name} product_price={item.product_price} user={item.user} cartitems={cartitems} setcartitems={setcartitems} />
                 ))
                }
                </Modal>

                <div className={styles.cartitem}>
                {
                 cartitems.map(item=>(    //map the data 
                 <div>{item.pname}&nbsp; x &nbsp;{item.quantity}</div>
                 ))
                }
                </div>

                <button className={styles.generate} onClick={generate_invoive}>generate invoice</button>

                <div className={styles.invoiceinfo}>
                    <div className={styles.tag2}>GENERATED INVOICE</div>
                    
                    <table border='0' className={styles.table}>
                        <tr>
                            <td className={styles.idtable}>id</td>
                            <td>name</td>
                            <td>price</td>
                            <td>quantity</td>
                            <td>amount</td>
                        </tr>
                    </table>
                    <div className={styles.temp1}></div>
                    {
                        tempinvoice.map(data=>(
                            <Generatedinvoice key={data.id} id={data.product_id} pname={data.product_name} quantity={data.quantity} price={data.price} amount={data.amount} />
                        ))
                    }
                    <br></br>
                    <div className={styles.subtotal}>Subtotal : ${subtotal}</div>

                    
                </div>
                
              
            </div>
        </div>
    )
}
