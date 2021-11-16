import React,{Component} from 'react'
import {Chart, Line} from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

export default class ApexChart extends Component {

  constructor(){
    super();
    this.state={
        date:[],
        profit:[],
        login:true,
    };
   
    
    
}


  componentDidMount(){                 //get data from backend
    
    axios.get(`http://localhost:3001/dailyprofit`,{
      params:{user:localStorage.getItem('user')}
    })
      .then(res => {
        const data1 = res.data;
        this.setState({date:data1.map(a => a.date)})
        this.setState({profit:data1.map(a => a.prof)})
        var formatdate = this.state.date.map((date) => {
          return moment(moment(date)).format('DD-MM-YYYY');      
        });
        this.setState({date:formatdate})
        
      })
    }

   

    render() {
    

      const data = {
        labels: this.state.date,
        datasets: [
          {
            label: 'date wise profit',
            data: this.state.profit,
            fill: false,
            backgroundColor: 'green',
            borderColor: 'green',
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            fill: false
          },
        ],
        
      };
      
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        maintainAspectRatio:true,
        
      };
      return (
        <Line data={data} options={options}  height={65}  />
        
      )
    }
}