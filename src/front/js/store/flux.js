const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      circuit: [],
      onecircuit: [],
      circuitmoto: [],
      onemoto: [],
      isLoggedIn: false,
    },
    actions: {
      // Use getActions to call a function within a fuction
     
      getcircuit: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/circuit");
        const data = await response.json();
        setStore({ circuit: data });
      },

      getcircuitbyid: async (id) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/circuit/" + id
        );
        const data = await response.json();
        setStore({ onecircuit: data });
      },

      getmotobyid: async (id) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/moto/" + id
        );
        const data = await response.json();
        setStore({ onemoto: data });
      },

      getmotobycircuit: async (id) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/circuitmoto/" + id
        );
        const data = await response.json();
        setStore({ circuitmoto: data });
      },

      register: async (email, password, name, lastname, dni, username) => {
        // fetching data from the backend
        const response = await fetch(
          process.env.BACKEND_URL + "/api/register",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              name: name,
              lastname: lastname,
              dni: dni,
              username: username,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await response.json();
        //const data = await setStore({ message: data.message }) para guardar informacion en el store
        //.catch(error =>  verificar si hay errores
        console.log("Error loading message from backend", data);
      },
      login: async (email, password) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/login",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setStore({ isLoggedIn: true });
        //const data = await setStore({ message: data.message }) para guardar informacion en el store
        //.catch(error =>  verificar si hay errores
        console.log("Error loading message from backend", data);
      },
    },
    profileimg: async (formData) => {
      // fetching data from the backend
      const response = await fetch(
        process.env.BACKEND_URL + "/api/profile",
        {
          method: "POST",
          body:  formData,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        }
      );
      const data = await response.json();
      //const data = await setStore({ message: data.message }) para guardar informacion en el store
      //.catch(error =>  verificar si hay errores
      console.log("Error loading message from backend", data);
    },
  };
};

export default getState;
