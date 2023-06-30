import React,{useReducer} from 'react'
const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };
    function reducer(state, action) {
        if (action.type==='email'){
            return {
                ...state,
                [action.type]: {value:action.payload,error:(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(action.payload))?false:true}
            };
        }else{return {
            ...state,
            [action.type]: {value:action.payload,error:action.payload.length>2?false:true}
        };}
        
    }
function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
  return (
    <form >
            <div>
                <label>First Name: </label> 
                <input type="text" name="firstName" value={state.firstName.value} onChange={handleChange}/>
                {state.firstName.error ?  <p style={{color:"red"}}>Too Short !</p>: ""}
            </div>
            
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastName" value={state.lastName.value} onChange={handleChange} />
                {state.lastName.error ?  <p style={{color:"red"}}>Too Short !</p>: ""}
            </div>
            <div><p>{JSON.stringify(state)}</p>
                <label>Email Address: </label> 
                <input type="text" name="email" value={state.email.value} onChange={handleChange} />
                {state.email.error ?  <p style={{color:"red"}}>invalid email !</p>: ""}

            </div>
            <input type="submit" value="Create User" />
        </form>
  )
}

export default Form