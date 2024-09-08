export default function Random(){
  let number = Math.random() * 100;

  return <h3 style={{'background-color': 'gray'}}>
    This is Random number {Math.round(number)}</h3>
}