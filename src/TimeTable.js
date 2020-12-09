import React, { Component } from 'react';
import './TimeTable.css';

export default class TimeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeZone: this.props.timeZone,
            localTime: [],
            localDay: [],
            cardInfo: [],
        };
    }

    static getDerivedStateFromProps(props) {
        if (props.timeZone === 'PST') {
            return {
                localTime: ['8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'],
                localDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
            };
        }
        if (props.timeZone === 'CST') {
            return {
                localTime: ['0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00'],
                localDay: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            };
        }
        return null;
    }

    componentDidMount() {
        var time = this.props.time
        let list = [];
        time.map((classTime, index) => {
            var time1 = 'December 7, 2020 ' + classTime.lectureFrom
            var Date1 = new Date(time1)
            var time2 = 'December 7, 2020 ' + classTime.lectureTo
            var Date2 = new Date(time2)
            var Height = ((Date2.getHours() - Date1.getHours()) * 60 + Date2.getMinutes() - Date1.getMinutes()) * 0.92485 + 'px'
            var Top = (Date1.getHours() - 8) * 27.7455 * 2 + (Date1.getMinutes() - 30) / 30 * 27.7455 - 555.5 + 'px'

            if (classTime.days.match(/M/)) {
                list.push({ left: '151px', top: Top, height: Height, title: this.props.classes[index] });
            }
            if (classTime.days.match(/T(?!h)/)) {
                list.push({ left: '301px', top: Top, height: Height, title: this.props.classes[index] });
            }
            if (classTime.days.match(/W/)) {
                list.push({ left: '451px', top: Top, height: Height, title: this.props.classes[index] });
            }
            if (classTime.days.match(/Th/)) {
                list.push({ left: '601px', top: Top, height: Height, title: this.props.classes[index] });
            }
            if (classTime.days.match(/F/)) {
                list.push({ left: '751px', top: Top, height: Height, title: this.props.classes[index] });
            }
            return classTime
        })
        this.setState({ cardInfo: list });
    }

    render() {
        var classCard = this.state.cardInfo.map((card, index) => {
            const newKey = index + 50
            return (
                <div key={newKey} style={{ position: 'absolute', marginLeft: card.left, marginTop: card.top, width: '150px', height: card.height, lineHeight: card.height, zIndex: '10', backgroundColor: '#f2ecde', textAlign: 'center' }}>
                    <p>{card.title}</p>
                </div>
            )
        });

        var gridTitle = this.state.localDay.map((day, index) => {
            const newKey = index + 100
            return (
                <th key={newKey}>{day}</th>
            )
        });

        var grid = this.state.localTime.map((localTime, index) => {
            return (
                <tr key={index}>
                    <td>{localTime}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        });

        return (
            <div className="container">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Schedule {this.props.index}</th>
                            {gridTitle}
                        </tr>
                    </thead>
                    <tbody>
                        {grid}
                    </tbody>
                </table>
                {classCard}
            </div>
        )
    }
}