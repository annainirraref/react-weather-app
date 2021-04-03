import React from "react";
export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[props.date.getDay()];

  let month = months[props.date.getMonth()];
  let year = props.date.getUTCFullYear();
  let monthDay = props.date.getUTCDate();
  return (
    <div>
      {day}, {monthDay} {month} {year}
    </div>
  );
}
