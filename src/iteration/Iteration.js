// import react from 'react'

const Iteration = ()=> 
{
		function Car(props) {
	  return <li>I am a { props.brand }</li>;
	}

	  const cars = [
	    {id: 1, brand: 'Ford'},
	    {id: 2, brand: 'BMW'},
	    {id: 3, brand: 'Audi'}
	  ];

	  var carlistt = [];
	  carlistt.push(<h1 key='2'>{cars[0].brand}</h1>);
	  carlistt.push(<h1 key='1'>{cars[0].brand}</h1>);

	  return (
	    <>
	      <h1>Who lives in my garage?</h1>
	      <ul>
	        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
	        {carlistt}
	      </ul>
	    </>
	  );
	
}


export default Iteration;