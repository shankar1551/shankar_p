import React from 'react';


 const Conditional = ()=>
{
	// conditional rendering using if statement
	var auth = true;
	if(auth)
		{
			return (<>
				<h1>conditinal rendering on authh</h1>
				{auth== true && (
					<h1>conditional rendering using and user is authenticated</h1>
				)}
			</>)
		}
		else
		{
			return (<>
				<h1>conditinal rendering on no auth</h1>
			</>)
		}

		

}

export default Conditional;