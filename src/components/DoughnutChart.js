import React from 'react';
import ReactEcharts from 'echarts-for-react';

function DoughnutChart({confirmed,recovered,deaths,moduleName}) {

    let Options = {
        title: {
            show:false,
            text: 'Worldwide',
            left: 'center',
            textStyle:{
                color:'#EB5569',
                fontWeight:'bold',
                fontFamily :'Lato-Semibold',
                fontSize:30,
                // lineHeight:7
            }
        },
        legend: {
            show:true,
            orient:'vertical',
            left:'left',
            itemGap:10,
            data: [{
                        name:'Confirmed',
                        textStyle:{
                            color:'#d8b9c3',
                            fontSize:18,
                            fontFamily:'Lato-Semibold'
                        }
                    },{
                        name:'Recovered',
                        textStyle:{
                            color:'#d8b9c3',
                            fontSize:18,
                            fontFamily:'Lato-Semibold'
                        }
                    },{
                        name:'Deaths',
                        textStyle:{
                            color:'#d8b9c3',
                            fontSize:18,
                            fontFamily:'Lato-Semibold'
                        }
                    }]
        },



        tooltip: {
            show:true,
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
            confine:true,
            backgroundColor:'#d8b9c3',
            padding:10,
            borderColor:'#EB5569',
            borderWidth:2,
            textStyle:{
                color:'#4d4c7d',
                fontFamily :'Lato-Semibold',
                fontSize:20
            }
        },
        series: [
            {
                name: moduleName,
                type: 'pie',
                radius: [60, 140],
                // roseType: 'area',
                roseType: 'radius',
                data: [
                    {
                        value: confirmed, 
                        name: 'Confirmed',
                        itemStyle:{
                            color :'#c72c41',
                        },
                        label:{
                            show:false,
                            fontSize:15
                        },
                    },
                    {
                        value: recovered, 
                        name: 'Recovered',
                        itemStyle:{
                            color :'#91bd3a',
                        },
                        label:{
                            show:false,
                            fontSize:15
                        },
                    },
                    {
                        value: deaths, 
                        name: 'Deaths',
                        itemStyle:{
                            color :'#fab95b',
                        },
                        label:{
                            show:false,
                            fontSize:15
                        }
                    }
                ],
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                },
                labelLine: {
                    show: false
                },
            }
        ]
    };
    
    return (
        <div className="d-flex align-items-center justify-content-center mt-40">
			<ReactEcharts option={Options} style={{ height: '320px', width: '320px' }} />
        </div>
    );
}

export default DoughnutChart;