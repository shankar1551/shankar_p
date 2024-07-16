import {useState} from 'react';
import style from './style.module.css';



const LoginForm = ()=>
{

	const[inputs,setInputs] = useState({});
	const[error,setError] = useState('');
	const submitForm = (f)=>
	{
		f.preventDefault();
		console.log(f);
		setError('length shuold be greater thaan 10');
	}


	const setInputss = (e)=>
	{
		let name = e.target.name;
		let value = e.target.value;

		setInputs((oldValues)=>
			{
				//dynamic updation of object key value
				return {...oldValues,[name]:value}
			});

		console.log(inputs);

	}

	return (
		<>
			
			{/* <h1>userName:{username}</h1> */}
			<h2>{error}</h2>
			<form className="form form-group" >
				<label className={style.labelc}>Enter username</label>
				<input 
					type="text"
					onChange={(e)=>setInputss(e)} 
					value = {inputs.username||''}
					name='username'
				/> 
				<label className={style.labelc}>Enter username</label>
				<input 
					type="text"
					onChange={(e)=>setInputss(e)} 
					value = {inputs.password||''}
					name = 'password'
				/>

				<button onClick ={submitForm} >Submit</button>
			</form>
		</>
		);

}


export default LoginForm;