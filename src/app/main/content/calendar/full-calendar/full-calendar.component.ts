import {Component, Input, OnInit} from '@angular/core';
declare var $;
@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class FullCalendarComponent implements OnInit {

  constructor() { }

  @Input() data;

  ngOnInit() {

      $('#calendar').contextmenu({
        delegate: 'div.fc-content',
        menu: [
          {title: "Open", cmd: "open", uiIcon: "ui-icon-extlink"},
          {title: "Copy", cmd: "cpy", uiIcon: "ui-icon-copy"},
          {title: "Edit", cmd: "edit", uiIcon: "ui-icon-pencil"},
          {title: "Status", uiIcon: "ui-icon-pencil", children:[
            {title: "Default", cmd: "past"},
            {title: "Completed", cmd: "completed"},
            {title: "Invoiced", cmd: "invoiced"},
            {title: "Paid", cmd: "paid"},
            {title: "Cancelled", cmd: "cancelled"}
          ]},
          {title: "----"},
          {title: "Delete", cmd: "del", uiIcon: "ui-icon-trash"},
          {title: "Restore", cmd: "res", uiIcon: "ui-icon-arrowreturnthick-1-n"},
          {title: "Ungroup", cmd: "ugroup", uiIcon: "ui-icon-arrow-4-diag"}
        ],

      });

      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        contentHeight: 'auto',
        navLinks: 'true',
        lazyFetching: false,
        firstDay: 0,
        editable: true,
        theme: true,
        defaultDate: '2014-06-12',
        disableResizing: true,
        events: this.data,
        navLinkDayClick: function (date, jsEvent) {
        },

        eventMouseover: function (event, jsEvent, view) {
          console.log(2)
          var layer =	"<div id='events-layer' class='fc-transparent' style='position:absolute; top: -19px;left: 50%;z-index: 100;background: black;'>TEXT</div>";
          $(this).append(layer);
        },
        eventMouseout: function(calEvent, domEvent) {
          $(this).find('div[id*=events-layer]').remove();
        },
      });

  }
}
