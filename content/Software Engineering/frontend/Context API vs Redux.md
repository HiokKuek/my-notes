---
title: Context API vs Redux
draft: false
tags:
  - "#react"
---
### State
State is data that changes over time. It can be managed at two levels 
1. Component Level: managed with `useState` or `useReducer`
2. Global Level: shared across multiple components with *Context API*, *Redux*, *Zustand* or other state management libraries. 

### Context API
React's built-in state management solution 

1. Create a single context called `UserContext`
```jsx title:UserContext.jsx
import React, { createContext, useState } from "react";  
  
// Create Context  
export const UserContext = createContext();  
  
// Create Provider Component  
export const UserProvider = ({ children }) => {  
	const [user, setUser] = useState({  
	personalDetails: {  
		name: "John Doe",  
		email: "john@example.com",  
	},  
	employmentDetails: {  
		company: "TechCorp",  
		role: "Frontend Developer",  
	},  
});  
  
return (  
		<UserContext.Provider value={{ user, setUser }}>  
			{children}  
		</UserContext.Provider>  
	);  
};
```

2. Provide the context so that other components can use it 
```jsx title:App.jsx
import React from "react";  
import ReactDOM from "react-dom";  
import { UserProvider } from "./UserContext";  
import PersonalInfo from "./PersonalInfo";  
import EmploymentInfo from "./EmploymentInfo";  
  
const App = () => (  
	<UserProvider>  
		<PersonalInfo />  
		<EmploymentInfo />  
	</UserProvider>  
);  
  
ReactDOM.render(<App />, document.getElementById("root"));
```

3. Create components that make use of the global context
```jsx title:PersonalInfo.jsx
//PersonalInfo Component  
import React, { useContext } from "react";  
import { UserContext } from "./UserContext";  
  
const PersonalInfo = () => {  
	// accessing user data from UserContext  
	const { user, setUser } = useContext(UserContext);  
	  
	return (  
		<div>  
			<h2>Personal Information</h2>  
			<p>Name: {user.personalDetails.name}</p>  
			<p>Email: {user.personalDetails.email}</p>  
		</div>  
		);  
};  
  
export default PersonalInfo;
```

#### Pros: 
1. Built-in to React
2. Easy to implement 
3. Ideal for Small to Medium-Sized Applications
4. Great for Read-Heavy Applications
	- great for applications where the global state is mostly accessed rather than frequently updated 

#### Cons:
1. Not Ideal for large-scale applications
2. Triggers Unnecessary Re-renders:
	- when a value inside the context updates, 
	- all components consuming that context re-renders
3. Lack of Strict State Management 
	- All components can directly modify the context, 
	- lacks structure and predictability 
	- makes debugging difficult and increases the risk of unintended side effects

### Redux 
State management library, provides a centralised store to manage and share data across components efficiently

1. Create a user slice 
```jsx title:userSlice.jsx
import { createSlice } from "@reduxjs/toolkit";  
  
// Initial state  
const initialState = {  
	personalDetails: {  
		name: "John Doe",  
		email: "john@example.com",  
		age: 28,  
	},  
	employmentDetails: {  
		company: "Tech Corp",  
		position: "Software Engineer",  
	},  
};  
  
// Create Redux slice  
const userSlice = createSlice({  
	name: "user", // Name of the slice  
	initialState, // Default state for this slice  
	reducers: {  
		updateEmploymentDetails: (state, action) => {  
		// updates the employementDetails by appending a new key sent by actions.payload  
		state.employmentDetails = { ...state.employmentDetails, ...action.payload };  
	},  
	},  
});  
  
// Export actions and reducer  
export const { updateEmploymentDetails } = userSlice.actions;  
export default userSlice.reducer;
```


2. Create a Redux Store
```jsx title:store.jsx
import { configureStore } from "@reduxjs/toolkit";  
import userReducer from "./userSlice";  
  
const store = configureStore({  
	reducer: {  
		user: userReducer,  
	},  
});  
  
export default store;
```

3. Wrap the app component with the redux provider, and ensure that it has access to the store
```jsx title:layout.jsx
import React from "react";  
import ReactDOM from "react-dom";  
import { Provider } from "react-redux";  
import store from "./store";  
import App from "./App";  
  
ReactDOM.render(  
	<Provider store={store}>  
		<App />  
	</Provider>,  
	document.getElementById("root")  
);
```

```jsx title:App.jsx
import React from "react";  
import PersonalInfo from "./PersonalInfo";  
import EmploymentInfo from "./EmploymentInfo";  
  
function App() {  
return (  
	<div>  
		<h1>User Details</h1>  
		<PersonalInfo />  
		<EmploymentInfo />  
	</div>  
);  
}  
  
export default App;
```

4. Consume Redux State in `PersonalInfo`
```jsx title:PersonalInfo.jsx
import React from "react";  
import { useSelector } from "react-redux";  
  
const PersonalInfo = () => {  
	// selecting only personalDetails from the user state  
	const personalDetails = useSelector((state) => state.user.personalDetails);  
	  
	return (  
		<div>  
			<h2>Personal Information</h2>  
			<p>Name: {personalDetails.name}</p>  
			<p>Email: {personalDetails.email}</p>  
			<p>Age: {personalDetails.age}</p>  
		</div>  
	);  
};  
  
export default PersonalInfo;
```

5. Consume and update state in `EmploymentInfo`
```jsx title:EmploymentInfo.jsx
import React from "react";  
import { useSelector, useDispatch } from "react-redux";  
import { updateEmploymentDetails } from "./userSlice";  
  
const EmploymentInfo = () => {  
	// selecting only emplyomentDetails from the state  
	const employmentDetails = useSelector((state) => state.user.employmentDetails);  
	// dispatch, to dispatch the action  
	const dispatch = useDispatch();  
	  
	//dispatch updateEmploymentDetails to update the employee details with new company name  
	const updateCompany = () => {  
		dispatch(updateEmploymentDetails({ company: "NewTech" }));  
	};  
	  
	return (  
		<div>  
			<h2>Employment Information</h2>  
			<p>Company: {employmentDetails.company}</p>  
			<p>Position: {employmentDetails.position}</p>  
			<button onClick={updateCompany}>Update Company</button>  
		</div>  
	);  
};  
  
export default EmploymentInfo;
```

#### Pros:
1. Predictable State Management 
	- ensures consistent state updates through actions and reducers
	- easier to debug
2. Centralised State 
3. Efficient Re-renders
	- Only components subscribe to updated state slices re-render, improving performance 
4. Time-travel debugging: 
	- Redux provides its devtools that allow tracking and reverting state changes 
5. Scalability & Maintainability 
	- Modular slices make scaling seamless 

**Cons:**
1. Boliderplate code
	- need to write actions, reducers and store configuration 
2. Complexity for Small Apps
	- It may be an overkill for simple applications 
3. Steep Learning Curve 
4. Increased Bundle Size