const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const dotenv = require('dotenv').config()


const app = express()
app.use(cors());
app.use(express.json())
const db = mysql.createConnection({



    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE


})



app.post('/sentdata', (req, res) => {
    const user = req.body.user
    const id = req.body.id
    const pname = req.body.pname
    const price = req.body.price
    const profitperitem = req.body.profitperitem
    const quantity = req.body.quantity
    var qry = "INSERT INTO product(user,product_id,product_name,product_price,stock,profit_per_item) VALUES(?,?,?,?,?,?)"
    db.query(qry, [user, id, pname, price, quantity,profitperitem], (err, result) => {
        if (err)
        {
            console.log(err)
        }
        else {
            return res.send("hello")
        }
    })

})

app.post('/stockupdate', (req, res) => {
    const user = req.body.user
    const id = req.body.product_id
    const pname = req.body.product_name
    const stock = req.body.stock
    var qry = "update product set stock=stock+? where product_id=? and user=?;"
    db.query(qry, [stock, id, user], (err, result) => {
        if (err)
        {
            console.log(err)
        }
        else {
            return res.send("hello")
        }
    })

})

app.get('/receiveddata', (req, res) => {
    const user = req.query.user
    console.log(user)
    var qry = "SELECT * FROM product where user=?"
    db.query(qry, [user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted")
            return res.send(result)
        }
    })
})

app.get('/totalproduct', (req, res) => {
    const user = req.query.user
    console.log(user)
    var qry = "SELECT count(*) as count  FROM product where user=?"
    db.query(qry, [user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted total number of products")
            return res.send(result)
        }
    })
})

app.get('/stockinhand', (req, res) => {
    const user = req.query.user
    console.log(user)
    var qry = "SELECT sum(stock) as stock  FROM product where user=?"
    db.query(qry, [user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted total stock")
            return res.send(result)
        }
    })
})


app.get('/chartsdata', (req, res) => {          //for charts and profit
    const user = req.query.user
    var qry = "SELECT * FROM sale2 where user=?"
    db.query(qry, [user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted")
            return res.send(result)
        }
    })
})


app.get('/dailyprofit', (req, res) => {
    const user = req.query.user
    const filter = req.query.filter
    
    if(filter==="true")
    var qry = "select p.date,p.prof,g.growth_percentage from profit p,growth g where p.date=g.date and p.user_id=? and g.user_id=? order by p.date desc ;"
    else if(filter==="false")
    var qry = "select p.date,p.prof,g.growth_percentage from profit p,growth g where p.date=g.date and p.user_id=? and g.user_id=? order by p.date;"
    db.query(qry, [user, user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted daily profit")
            return res.send(result)
        }
    })
})

app.get('/monthlyprofit', (req, res) => {
    const user = req.query.user
    var qry = "select month(p.date) as month,avg(p.prof) as avg from profit p where p.user_id=? group by month(p.date)"
    db.query(qry, [user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted")
            return res.send(result)
        }
    })
})

app.get('/salehistory', (req, res) => {
    const user = req.query.user
    const filter = req.query.filter
    
    if(filter==="true")
    var qry = "select s.date,s.sale_count,s.profit,s.user,p.product_name,p.product_price from sale2 s, product p where s.product_id=p.product_id and s.user=? and p.user=? order by s.date desc;"
    else if(filter==="false")
    var qry = "select s.date,s.sale_count,s.profit,s.user,p.product_name,p.product_price from sale2 s, product p where s.product_id=p.product_id and s.user=? and p.user=? order by s.date;"

    db.query(qry, [user,user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("sale history extracted")
            return res.send(result)
        }
    })
})


app.get('/totalprofit', (req, res) => {
    const user = req.query.user
    var qry = "SELECT SUM(profit) FROM sale2 where user=?;"
    db.query(qry, [user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted total profit")
            return res.send(result)

        }
    })
})

app.get('/chart5', (req, res) => {
    const user = req.query.user
    const p1 = req.query.p1
    const p2 = req.query.p2
    const p3 = req.query.p3
    
    var qry = "select s1.date,s1.profit as p1,s2.profit as p2,s3.profit as p3 from sale2 s1 ,sale2 s2 ,sale2 s3 where s1.user=? and s2.user=? and s3.user=? and s1.product_id=? and s2.product_id=? and s3.product_id=? and s1.date=s2.date and s2.date=s3.date group by s1.date ;"
    db.query(qry, [user,user,user,p1,p2,p3], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted chart5")
            return res.send(result)

        }
    })
})

app.post('/growth_table', (req, res) => {
    const user = req.body.user
    
    var qry2 = "insert into growth select p1.date,((p1.prof-p2.prof)/p1.prof)*100,p1.user_id  from profit p1,profit p2 where p2.date=curdate()- INTERVAL 1 DAY and p1.date=curdate() and p1.user_id=? on duplicate key update growth_percentage=(select (((p1.prof-p2.prof)/p1.prof)*100) from profit p1,profit p2 where p2.date=curdate()- INTERVAL 1 DAY and p1.date=curdate()  and p1.user_id=?);"
    
    db.query(qry2, [user, user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('growth updated')
            return res.send("hello")
        }
    })
})

app.post('/profit_table', (req, res) => {

    const user = req.body.user
    var qry = "insert into profit(user_id,date,prof) (select user,(date),sum(profit) from sale2 where user=? and date=curdate()) on duplicate key update prof=(select sum(profit) from sale2 where user=? and date=curdate());"

    db.query(qry, [user, user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('profit updated')
            return res.send("hello")
        }
    })


})


app.get('/newinvoicedata', (req, res) => {
    const user = req.query.user
    const client = req.query.client
    var qry = "SELECT * FROM tempinvoice where user=? and client=?;"
    db.query(qry, [user, client], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted temp invoice details")
            return res.send(result)

        }
    })
})

app.get('/subtotal', (req, res) => {
    const user = req.query.user
    const client = req.query.client
    var qry = "SELECT sum(amount) as sum FROM tempinvoice where user=? and client=?;"
    db.query(qry, [user, client], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted subtotal details")
            return res.send(result)

        }
    })
})





app.get('/get_weekday_data', (req, res) => {          //for charts
    const user = req.query.user
    var qry = "SELECT AVG(SUNDAY),AVG(MONDAY), AVG(TUESDAY),AVG(WEDNESDAY),AVG(THURSDAY),AVG(FRIDAY),AVG(SATURDAY) FROM week_day_data where user=?"
    db.query(qry, [user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted")
            return res.send(result)

        }
    })
})

app.get('/top_product', (req, res) => {          //for charts

    const user = req.query.user

    var qry = 'select product_id,product_name,total_sale from product where user= ? order by total_sale desc limit 3;'
    db.query(qry, [user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("extracted")
            return res.send(result)

        }
    })
})



app.get('/product_profit',(req,res)=>{          //for charts
    
    const user=req.query.user
    
    var qry='select product_name,sum(profit) as sum from sale2 where user=? group by product_name ;'
    db.query(qry,[user],(err,result)=>{
        if(err)
        {
            console.log(err)
        }       
        else{
            console.log("extracted")
            return res.send(result)
            
            }
    })
})  

app.post('/saleupdate',(req,res)=>{
    
    const id=req.body.product_id
    const pname=req.body.product_name
    const salecount=req.body.salecount
    const profit=req.body.profit
    const date=req.body.day
    const user=req.body.user

    
    var qry = 'INSERT INTO sale2(date,user,product_id,product_name,sale_count,cost) VALUES(CURDATE(),?,?,?,?,?) on duplicate key update sale_count=if(user=? and product_id=?,sale_count+' + salecount + ',sale_count),profit=if(user=? and product_id=?,profit+' + profit + ',profit);'
    var qry2 = 'update product set stock=stock-? ,total_sale=total_sale+? where product_id=? and user=?;'
    var qry3 = 'update sale2 s,product p set profit=s.sale_count*p.profit_per_item where s.product_id=p.product_id and s.user=p.user;'
    db.query(qry, [user, id, pname, salecount, profit, user, id, user, id], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('inserted in sales')


        }

    })

    db.query(qry2, [salecount, salecount, id, user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('updated stock and total sale')

        }

    })

    db.query(qry3, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('updated profit')
            return res.send("hello")

        }

    })



})

app.post('/weekday_table_update', (req, res) => {

    const id = req.body.product_id
    const pname = req.body.product_name
    const salecount = req.body.salecount
    const date = req.body.day
    const user = req.body.user
    {
        var day
        if (date == 0)
            day = "sunday"
        else if (date == 1)
            day = "monday"
        else if (date == 2)
            day = "tuesday"
        else if (date == 3)
            day = "wednesday"
        else if (date == 4)
            day = "thursday"
        else if (date == 5)
            day = "friday"
        else if (date == 6)
            day = "saturday"
    }
    console.log(day)
    var qry = 'INSERT INTO week_day_data(user,dates,' + day + ') VALUES(?,CURDATE(),?)  ON DUPLICATE KEY UPDATE ' + day + '=if(user=? ,' + day + '+' + salecount + ',' + day + ') ;'

    db.query(qry, [user, salecount, user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('inserted')
            return res.send("hello")
        }

    })


})


app.post('/tempinvoice', async (req, res) => {

    const id = req.body.product_id
    const pname = req.body.product_name
    const quantity = req.body.quantity
    const amount = req.body.amount
    const price = req.body.price
    const user = req.body.user
    const client = req.body.client

    var qry = 'INSERT INTO tempinvoice(date,user,product_id,product_name,quantity,amount,price,client) VALUES(CURDATE(),?,?,?,?,?,?,?) on duplicate key update quantity=if(user=? and product_id=?,quantity+' + quantity + ',quantity),amount=if(user=? and product_id=?,amount+' + amount + ',amount);'


    await db.query(qry, [user, id, pname, quantity, amount, price, client, user, id, user, id], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('inserted in tempinvoice')
            return res.send("hello")
        }

    })




})

app.post('/delete_product', (req, res) => {

    const id = req.body.id
    const pname = req.body.product_name
    const user = req.body.user

    console.log(id)
    console.log(user)

    var qry = 'DELETE FROM PRODUCT WHERE product_id=? and user=?;'
    var qry2 = "ALTER TABLE SALE2 DROP COLUMN " + pname + ";"
    db.query(qry, [id, user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('deleted')
            return res.send("hellow")
        }
    })


})

app.post('/registeruser', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const shopname = req.body.shopname
    const address = req.body.address


    var qry = 'INSERT INTO USER_LOGIN(username,password,name,shopname,shopaddress) VALUE (?,?,?,?,?);'

    db.query(qry, [username, password,name,shopname,address], (err, result) => {
        if (err) {
            console.log(err)
            return res.send('error')
           // alert('User already Registered !')
        }
        else {
            console.log('user registered')
            return res.send("noerror")
        }
    })


})

app.get('/getuserdata', (req, res) => {
    const user = req.query.user
    var qry = "SELECT name,shopname,shopaddress FROM  user_login where username=? "
    db.query(qry,[user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("shopdate returned")
            return res.send(result)
        }
    })
})

app.post('/invoice', (req, res) => {

    const user = req.body.user
    const email = req.body.email
    const invoiceid = req.body.invoiceid
    const phone = req.body.phone
    const cart = req.body.cart
    const client = req.body.client
    const paymentmode = req.body.paymentmode


    var qry = 'INSERT INTO invoice (user,client, date, amount) SELECT user,client,date,sum(amount) FROM tempinvoice WHERE client=? and date=curdate() and user=?;'

    db.query(qry, [client, user], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('new invoice generated')
            return res.send('hello')
        }
    })


})

app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    user_global = username



    var qry = 'SELECT * FROM USER_LOGIN WHERE USERNAME= ? AND PASSWORD=?;'

    db.query(qry, [username, password], (err, result) => {
        if (err) {
            return res.send({ err: err })
        }
        if (result.length > 0) {
            return res.send({ message: 'yes' })
        }
        else {
            return res.send({ message: 'no' })
        }
    })




})

app.post('/profile', (req, res) => {

    const username = req.body.username
    
    var qry = 'SELECT * FROM USER_LOGIN WHERE USERNAME= ?;'

    db.query(qry, [username], (err, result) => {
        if (err) {
            return res.send({ err: err })
        }
        else
            return res.send(result)
        
    })

})
app.post('/newprofile', (req, res) => {

    const username = req.body.username
    const name = req.body.name
    const newusername = req.body.newusername
    const password = req.body.password
    const shopname = req.body.shopname
    const shopaddress = req.body.shopaddress
    
    var qry = 'update user_login set name=?,username=?,password=?,shopname=?,shopaddress=? where username =?;'

    db.query(qry, [name,newusername,password,shopname,shopaddress,username], (err, result) => {
        if (err) {
            return res.send({ err: err })
        }
        else
            return res.send(result)
        
    })

})




app.get('/', (req, res) => {
    res.send('server running')
})

app.listen(3001, () => {
    console.log('server running')
})
