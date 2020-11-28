import React, { Component } from 'react';
import './TimeTable.css';

export default class TimeTable extends Component {

    render() {
        var classes = this.props.classes
        var time = this.props.time
        return (
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr className="bg-light-gray"> 
                                <th className="align-middle">Schedule {this.props.index}</th>
                                <th className="text-uppercase">Monday</th>
                                <th className="text-uppercase">Tuesday</th>
                                <th className="text-uppercase">Wednesday</th>
                                <th className="text-uppercase">Thursday</th>
                                <th className="text-uppercase">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">8:30</td>
                                <td>
                                    <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Dance</span>
                                    <div className="margin-10px-top font-size14">Room TBA</div>
                                </td>
                                <td>
                                    <span className="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">Yoga</span>
                                    <div className="font-size13 text-light-gray">Marta Healy</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">9:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">10:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">10:30</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">11:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">11:30</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">12:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">12:30</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">13:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">13:30</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">14:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">14:30</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">15:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">15:30</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">16:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">16:30</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">17:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">17:30</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td className="align-middle">18:00</td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}