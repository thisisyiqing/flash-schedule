import React, { Component } from 'react'
import { Button, Menu, Dropdown, Card } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import TimeTable from './TimeTable';
import { createFromIconfontCN } from '@ant-design/icons';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    /** The array that stores all the possible schedules */
    var schedules = []
    /** The test array */
    // var schedules = [
    //   {
    //     id: 1,
    //     classes: ['CSE 351 A', 'CSE 311 B'],
    //     time: [{ days: 'MWF', lectureFrom: '11:30:00', lectureTo: '12:20:00', together: 'MWF 11:30-12:20' }, { days: 'TTh', lectureFrom: '13:30:00', lectureTo: '14:20:00', together: 'TTh 13:30-14:20' }],
    //     description: 'Schedule 1',
    //     show: false,
    //     pinned: false,
    //   },
    //   {
    //     id: 2,
    //     classes: ['CSE 311 A', 'CSE 351 B'],
    //     time: [{ days: 'MWF', lectureFrom: '08:30:00', lectureTo: '09:20:00', together: 'MWF 8:30-9:20' }, { days: 'Th', lectureFrom: '16:30:00', lectureTo: '17:40:00', together: 'TTh 13:30-14:20' }],
    //     description: 'Schedule 2',
    //     show: false,
    //     pinned: false,
    //   },
    //   {
    //     id: 3,
    //     classes: ['CSE 311 A', 'CSE 351 B'],
    //     time: [{ days: 'MF', lectureFrom: '15:00:00', lectureTo: '16:20:00', together: 'TTh 13:30-14:20' }, { days: 'T', lectureFrom: '08:30:00', lectureTo: '10:00:00', together: 'TTh 13:30-14:20' }],
    //     description: 'Schedule 3',
    //     show: false,
    //     pinned: false,
    //   },
    //   {
    //     id: 4,
    //     classes: ['MATH 308 A', 'CSE 351 B'],
    //     time: [{ days: 'MF', lectureFrom: '15:00:00', lectureTo: '16:20:00', together: 'TTh 13:30-14:20' }, { days: 'T', lectureFrom: '08:30:00', lectureTo: '10:00:00', together: 'TTh 13:30-14:20' }],
    //     description: 'Schedule 4',
    //     show: false,
    //     pinned: false,
    //   },
    //   {
    //     id: 5,
    //     classes: ['MATH 308 A', 'CSE 351 B'],
    //     time: [{ days: 'MF', lectureFrom: '15:00:00', lectureTo: '16:20:00', together: 'TTh 13:30-14:20' }, { days: 'T', lectureFrom: '08:30:00', lectureTo: '10:00:00', together: 'TTh 13:30-14:20' }],
    //     description: 'Schedule 4',
    //     show: false,
    //     pinned: false,
    //   },
    //   {
    //     id: 6,
    //     classes: ['MATH 308 A', 'CSE 351 B'],
    //     time: [{ days: 'MF', lectureFrom: '15:00:00', lectureTo: '16:20:00', together: 'TTh 13:30-14:20' }, { days: 'T', lectureFrom: '08:30:00', lectureTo: '10:00:00', together: 'TTh 13:30-14:20' }],
    //     description: 'Schedule 4',
    //     show: false,
    //     pinned: false,
    //   }
    // ]
    this.state = {
      schedules: schedules,
      timeZone: 'PST'
    };
  }

  /**
   * Receives possible schedule information and stores it into the schedules array
   */
  componentDidMount() {
    axios(`/schedules`)
      .then(res => {
        console.log(res.data);
        this.setState({
          schedules: res.data.schedules
        });
      })
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

  /**
   * Sets a delay to handleClick to prevent confusion with handleDoubleClick
   */
  timer = 0;
  delay = 200;
  prevent = false;

  handleClick = (index) => {
    let me = this;
    me.timer = setTimeout(function () {
      if (!me.prevent) {
        me.displaySchedule(index);
      }
      me.prevent = false;
    }, this.delay);
  }

  handleDoubleClick = (index) => {
    clearTimeout(this.timer);
    this.prevent = true;
    this.pinSchedule(index);
  }

  /**
   * Displays the schedule's timetable after clicking its associated button
   * @param  index   the index of the chosen schedule
   */
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

  /**
   * Pins the schedule after double-clicking the pin icon on its associated button
   * @param  index   the index of the pinned schedule
   */
  pinSchedule(index) {
    const myIndex = Number(index)
    this.setState({
      schedules: this.state.schedules.map((schedule) => {
        if (schedule.pinned === true || schedule.id === myIndex) {
          schedule.pinned = !schedule.pinned
        }
        return schedule
      }),
    });
  }

  render() {
    /** Imports the pin icons from IconFont */
    var IconFont = createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_2251591_y07tf1n2ppg.js',
    });

    /** Displays buttons for all the possible schedules */
    var scheduleButtons = this.state.schedules.map((schedule) => {
      let newKey = schedule.id + 50
      return (
        <div key={newKey}>
          <Button key={schedule.id} type="primary" size="large" onClick={() => this.handleClick(schedule.id)}
            style={schedule.show ? { backgroundColor: '#b8860b', border: '1px solid #b8860b' } : { backgroundColor: '#d3b17d', border: '1px solid #d3b17d' }} icon={<IconFont type={schedule.pinned ? "icon-fix-full" : "icon-fix"} onDoubleClick={() => this.handleDoubleClick(schedule.id)} />}>
            {schedule.description}</Button>
        </div>
      )
    }
    );

    /** Displays the time table for the chosen schedule */
    var scheduleChoices = this.state.schedules.map((schedule) => {
      const schedulekey = schedule.id + 100
      return (
        <div key={schedulekey} style={schedule.show ? { display: 'block', marginLeft: '75px' } : { display: 'none' }}>
          <TimeTable classes={schedule.classes} time={schedule.time} index={schedule.id} timeZone={this.state.timeZone} />
        </div>
      )
    }
    );

    /** Displays the pinned schedule's information on the right */
    var pinnedSchedule = this.state.schedules.map((schedule, index) => {
      if (schedule.pinned) {
        var item = schedule.classes.map((oneClass, index) => {
          var newKey = index + 150;
          return (
            <p key={newKey}>
              <span>{oneClass}<br></br></span>
              {schedule.time.map((time, i) => {
                if (index === i) {
                  var newKey = index + 250;
                  return (
                    <span key={newKey}>{time.together}</span>
                  )
                }
                return null
              })}
            </p>
          )
        })
        var newKey = index + 200
        return (
          <Card key={newKey} title="Your Pinned Schedule" style={{ width: "250px", position: "fixed", marginLeft: "1050px", marginTop: "-650px" }}>{item}</Card>
        )
      }
      return null
    });

    /** Items in the time zone dropdown */
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
      <div style={{ padding: '20px' }}>
        <div style={{ marginLeft: '50px' }}>
          <Dropdown overlay={menu}>
            <Button>
              Select Your Time Zone <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div style={{ width: "75%", display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
          {scheduleButtons}</div>
        <div>{scheduleChoices}</div>
        <div>{pinnedSchedule}</div>
      </div>
    );
  }
}