const TranslateDate = ({ date }) => {
  const dateText = String(date).split(' ');

  const month = (() => {
    switch (dateText[0]) {
      case 'January': return 1;
      case 'February': return 2;
      case 'March': return 3;
      case 'April': return 4;
      case 'May': return 5;
      case 'June': return 6;
      case 'July': return 7;
      case 'August': return 8;
      case 'September': return 9;
      case 'October': return 10;
      case 'November': return 11;
      default: return 12;
    }
  })();
  const joinDate = dateText[2] + '.' + month + '.' + dateText[1].slice(0, 2);
    
  return joinDate;
}

export default TranslateDate;
