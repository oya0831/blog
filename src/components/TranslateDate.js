import React from 'react'

export default class TranslateDate extends React.Component {
  render() {
    const date = this.props.date.split(" ")

    const month = (() => {
      switch (date[0]) {
        case "January": return 1;
        case "February": return 2;
        case "March": return 3;
        case "April": return 4;
        case "May": return 5;
        case "June": return 6;
        case "July": return 7;
        case "August": return 8;
        case "September": return 9;
        case "October": return 10;
        case "November": return 11;
        default: return 12;
      }
    })();
    const joinDate = date[2] + "年" + month + "月" + date[1].slice(0, 2) + "日";
    
    return joinDate
  }
}
