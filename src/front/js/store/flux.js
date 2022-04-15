const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			register: async (email, password, name, lastname, dni, username) => {
				// fetching data from the backend
				const response = await fetch(process.env.BACKEND_URL + "/api/register",{
					method : 'POST',
					body : JSON.stringify ({
						email : email,
						password: password,
						name: name,
						lastname : lastname,
						dni: dni,
						username: username,
					 }),
					 headers: {
                        'Content-type': 'application/json'
                    }
					})
				    const data = await response.json();
					//const data = await setStore({ message: data.message }) para guardar informacion en el store
					//.catch(error =>  verificar si hay errores 
						 console.log("Error loading message from backend", data);
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
