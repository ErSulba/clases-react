const NumberList = (props) => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((num) => {
    return num * 2;
  })
  console.log(doubled);

  const listItems = numbers.map((num) => {
    return <li key={num} > {num} </li>
  })
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumberList