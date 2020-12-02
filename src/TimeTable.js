import React, { Component } from 'react';
import { Card } from 'antd';
import './TimeTable.css';

export default class TimeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeZone: this.props.timeZone,
            localTime: [],
            localDay: [],
            cardInfo: [{left: '100px', top: '300px', title: 'abc'}],
        };
    }

    static getDerivedStateFromProps(props) {
        if(props.timeZone === 'PST'){
            return{
                localTime: ['8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00',
                            '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'],
                localDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
            };  
        }
        if(props.timeZone === 'CST'){
            return{
                localTime: ['0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00',
                            '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00'],
                localDay: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            };  
        }
        return null;
    }

    componentDidMount(){
        var time = this.props.time
        time.map((classTime, index) => {
            var tempList = [];
            // if(classTime.days.indexOf('M') !== -1){
            //     this.setState({
            //         cardInfo: this.state.cardInfo.push({left: '100px', top: '300px', title: classTime.classes[index]})
            //     })
            // }
            // if(classTime.days.indexOf('W') !== -1){
            //     this.setState({
            //         tempList: [{left: '200px', top: '300px', title: classTime.classes[index]}],
            //         cardInfo: this.state.cardInfo.concat(tempList)
            //     })
            // }
            // if(classTime.days.indexOf('F') !== -1){
            //     this.setState({
            //         cardInfo: this.state.cardInfo.push({left: '300px', top: '300px', title: classTime.classes[index]})
            //     })
            // }
            // if(classTime.days.indexOf('Th') !== -1){
            //     this.setState({
            //         cardInfo: this.state.cardInfo.push({left: '250px', top: '300px', title: classTime.classes[index]})
            //     })
            // } 
            // if(classTime.days.indexOf('T') !== classTime.days.indexOf('Th')){
            //     this.setState({
            //         cardInfo: this.state.cardInfo.push({left: '150px', top: '300px', title: classTime.classes[index]})
            //     })
            // }
            return classTime
         })
    }

    render() {
        // var classes = this.props.classes
        // var classCard = this.state.cardInfo.map((card) => {
        //     return(
        //         <Card title={card.title} bordered={false} style={{position: 'absolute', marginLeft: card.left, marginTop: card.top, width: '50px'}}>
        //             <p>card.title</p>
        //         </Card>
        //     )
        // });

        var gridTitle = this.state.localDay.map((day, index) => {
            const newKey = index + 100
            return (
                <th key={newKey} className="text-uppercase">{day}</th>
            )
          }
        );

        var grid = this.state.localTime.map((localTime, index) => {
            return (
                <tr key={index}>
                    <td className="align-middle">{localTime}</td>
                    <td className="bg-light-gray" style={{backgroundColor: this.state.MondayColor}}></td>
                    <td className="bg-light-gray" style={{backgroundColor: this.state.TuesdayColor}}></td>
                    <td className="bg-light-gray" style={{backgroundColor: this.state.WednesdayColor}}></td>
                    <td className="bg-light-gray" style={{backgroundColor: this.state.ThursdayColor}}></td>
                    <td className="bg-light-gray" style={{backgroundColor: this.state.FridayColor}}></td>
                </tr>
            )
          }
        );

        return (
            <div className="container">
                <table className="table table-bordered text-center">
                    <tr className="bg-light-gray"> 
                        <th className="align-middle">Schedule {this.props.index}</th>
                        {gridTitle}
                    </tr>
                    {grid}
                </table>
                {/* {classCard} */}
            </div>
        )
        
        // return (
        //     <div className="container">
        //         <div className="table-responsive">
        //             <table className="table table-bordered text-center">
        //                 <thead>
        //                     <tr className="bg-light-gray"> 
        //                         <th className="align-middle">Schedule {this.props.index}</th>
        //                         <th className="text-uppercase">Monday</th>
        //                         <th className="text-uppercase">Tuesday</th>
        //                         <th className="text-uppercase">Wednesday</th>
        //                         <th className="text-uppercase">Thursday</th>
        //                         <th className="text-uppercase">Friday</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[0]}</td>
        //                         <td>
        //                             <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Dance</span>
        //                             <div className="margin-10px-top font-size14">Room TBA</div>
        //                         </td>
        //                         <td>
        //                             <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
        //                             <div className="font-size13 text-light-gray">Marta Healy</div>
        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[1]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[2]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[3]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[4]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[5]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[6]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[7]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[8]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[9]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[10]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[11]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[12]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[13]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[14]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[15]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[16]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[17]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>

        //                     <tr>
        //                         <td className="align-middle">{this.state.localTime[18]}</td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                         <td className="bg-light-gray">

        //                         </td>
        //                     </tr>
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // )
    }

}