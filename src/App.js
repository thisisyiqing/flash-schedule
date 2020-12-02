import React, { Component } from 'react'
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './App.css';
import TimeTable from './TimeTable';

export default class App extends Component {

  constructor(props) {
    super(props);
    var schedules = [
      {
        id: 1,
        classes: ['CSE 351 A', 'CSE 311 B'],
        time: [{ days: 'MWF', lecture: '11:30-12:20' }, { days: 'TTh', lecture: '13:30-14:20' }],
        description: 'Schedule 1',
        show: false
      },
      {
        id: 2,
        classes: ['CSE 311 A', 'CSE 351 B'],
        time: [{ days: 'MWF', lecture: '8:30-9:20' }, { days: 'Th', lecture: '16:30-17:20' }],
        description: 'Schedule 2',
        show: false
      },
      {
        id: 3,
        classes: ['CSE 311 A', 'CSE 351 B'],
        time: [{ days: 'MF', lecture: '15:00-16:20' }, { days: 'T', lecture: '8:00-9:20' }],
        description: 'Schedule 3',
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
    var scheduleButtons = this.state.schedules.map((schedule) => {
      return (
        <Button key={schedule.id} type="primary" size="large" onClick={() => this.displaySchedule(schedule.id)}>{schedule.description}</Button>
      )
    }
    );

    var scheduleChoices = this.state.schedules.map((schedule) => {
      const schedulekey = schedule.id + 100
      return (
        <div key={schedulekey} style={schedule.show ? { display: 'flex' } : { display: 'none' }}>
          <TimeTable classes={schedule.classes} time={schedule.time} index={schedule.id} timeZone={this.state.timeZone} />
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
        <Dropdown overlay={menu}>
          <Button>
            Select Your Time Zone <DownOutlined />
          </Button>
        </Dropdown>
        <div className='choices'>{scheduleButtons}</div>
        {scheduleChoices}
      </div>
    );
  }
}

