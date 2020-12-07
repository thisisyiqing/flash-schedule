import React, { Component } from 'react'
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './App.css';
import TimeTable from './TimeTable';
import { createFromIconfontCN } from '@ant-design/icons';


export default class App extends Component {

  constructor(props) {
    super(props);
    var schedules = [
      {
        id: 1,
        classes: ['CSE 351 A', 'CSE 311 B'],
        time: [{ days: 'MWF', lectureFrom: '11:30:00', lectureTo:'12:20.00' }, { days: 'TTh', lectureFrom: '13:30:00', lectureTo:'14:20.00'}],
        description: 'Schedule 1',
        show: false
      },
      {
        id: 2,
        classes: ['CSE 311 A', 'CSE 351 B'],
        time: [{ days: 'MWF', lectureFrom: '08:30:00', lectureTo:'09:20.00'}, { days: 'Th', lectureFrom: '16:30:00', lectureTo:'17:40.00' }],
        description: 'Schedule 2',
        show: false
      },
      {
        id: 3,
        classes: ['CSE 311 A', 'CSE 351 B'],
        time: [{ days: 'MF', lectureFrom: '15:00:00', lectureTo:'16:20.00'}, { days: 'T', lectureFrom: '08:30:00', lectureTo:'10:00.00'}],
        description: 'Schedule 3',
        show: false
      },
      {
        id: 4,
        classes: ['MATH 308 A', 'CSE 351 B'],
        time: [{ days: 'MF', lectureFrom: '15:00:00', lectureTo:'16:20.00'}, { days: 'T', lectureFrom: '08:30:00', lectureTo:'10:00.00'}],
        description: 'Schedule 4',
        show: false
      }
    ]
    this.state = {
      schedules: schedules,
      timeZone: 'PST'
    };
  }

  

  displaySchedule(index) {
    const myIndex = Number(index)
    this.setState({
      schedules: this.state.schedules.map((schedule) => {
        if (schedule.id === myIndex || schedule.show === true) {
          schedule.show = !schedule.show
        }
        return schedule
      })
    });
  }

  changeCTimeZone() {
    this.setState({
      timeZone: 'CST'
    });
  }

  changeSTimeZone() {
    this.setState({
      timeZone: 'PST'
    });
  }

  render() {

    var IconFont = createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_2251591_y07tf1n2ppg.js',
    });
    
    var scheduleButtons = this.state.schedules.map((schedule) => {
      return (
        <Button key={schedule.id} type="primary" size="large" onClick={() => this.displaySchedule(schedule.id)} style={{backgroundColor: '#d3b17d', border: '1px solid #d3b17d'}} icon={<IconFont type="icon-fix-full"/>}>{schedule.description}</Button>
      )
    }
    );

    var scheduleChoices = this.state.schedules.map((schedule) => {
      const schedulekey = schedule.id + 100
      return (
        <div key={schedulekey} style={schedule.show ? { display: 'flex', marginLeft: '75px'} : { display: 'none' }}>
          <TimeTable classes={schedule.classes} time={schedule.time} index={schedule.id} timeZone={this.state.timeZone}/>
        </div>
      )
    }
    );

    var menu = (
      <Menu>
        <Menu.Item onClick={() => this.changeSTimeZone()}>
          Pacific Standard Time (PST)
        </Menu.Item>
        <Menu.Item onClick={() => this.changeCTimeZone()}>
          China Standard Time (CST)
        </Menu.Item>
      </Menu>
    )

    

    return (
      <div>
        <div style={{marginLeft: '50px', marginTop: '20px'}}>
          <Dropdown overlay={menu}>
              <Button>
                Select Your Time Zone <DownOutlined />
              </Button>
          </Dropdown>
        </div>
        <div className='choices'>{scheduleButtons}</div>
          {scheduleChoices}
      </div>
    );
  }
}

