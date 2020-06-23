import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

class Schedule extends Component {
    render() {
        return (
            <div id="schedule">
              <h3>Weekly Schedule</h3>
              <FullCalendar
                  plugins={[timeGridPlugin]}
                  defaultView="timeGridWeek"
                  allDaySlot={false} minTime="7:00" maxTime="22:00"
                  height="auto" 
                  events={[
                      {
                          title: 'AMPA E2000',
                          daysOfWeek: [2, 4],
                          startTime: '13:10',
                          endTime: '14:25',
                      },
                      {
                          title: 'PHYS W1201',
                          daysOfWeek: [1, 3],
                          startTime: '10:10',
                          endTime: '11:25',
                      },
                      {
                          title: 'COMS W3157',
                          daysOfWeek: [2, 4],
                          startTime: '16:10',
                          endTime: '17:25',
                      },
                      {
                          title: 'COMS W3251',
                          daysOfWeek: [2, 4],
                          startTime: '14:40',
                          endTime: '15:55',
                      },
                      {
                          title: 'EXMP E1234',
                          daysOfWeek: [2, 4],
                          startTime: '19:00',
                          endTime: '20:00',
                      },
                      {
                          title: 'EXMP W4567',
                          daysOfWeek: [2, 4],
                          startTime: '19:00',
                          endTime: '20:00',
                      },
                  ]}
              />
            </div>
        );
    }
}

export default Schedule;
