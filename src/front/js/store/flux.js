import swal from "sweetalert";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      circuit: [],
      onecircuit: [],
      circuitmoto: [],
      user: {},
      onemoto: {},
      BACKEND_URL:
        "https://3001-steph123123-rounder-247hvygbb9a.ws-eu89.gitpod.io",
      isLoggedIn: false,
      user_reserve: [],
      circuit_reserve: {},
      circuit_moto: {},
      user_repeat_reserve: {},
    },
    actions: {
      // Use getActions to call a function within a fuction

      getcircuit: async () => {
        const response = await fetch(getStore().BACKEND_URL + "/api/circuit");
        const data = await response.json();
        setStore({ circuit: data });
      },

      getcircuitbyid: async (id) => {
        const response = await fetch(
          getStore().BACKEND_URL + "/api/circuit/" + id
        );
        const data = await response.json();
        setStore({ onecircuit: data });
      },

      getmotobyid: async (id) => {
        const response = await fetch(
          getStore().BACKEND_URL + "/api/moto/" + id
        );
        const data = await response.json();
        setStore({ onemoto: data });
      },

      getmotobycircuit: async (id) => {
        const response = await fetch(
          getStore().BACKEND_URL + "/api/circuitmoto/" + id
        );
        const data = await response.json();
        setStore({ circuitmoto: data });
      },

      register: async (
        email,
        password,
        name,
        lastname,
        dni,
        username,
        phone,
        adress
      ) => {
        // fetching data from the backend
        const response = await fetch(getStore().BACKEND_URL + "/api/register", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            lastname: lastname,
            dni: dni,
            username: username,
            phone: phone,
            adress: adress,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);

        if (data.mensaje == "Failure") {
          swal({
            text: "Already exist",
            icon: "error",
          });
        } else if (data.mensaje == "Welcome to Rounder!") {
          swal({
            text: data.mensaje,
            icon: "success",
          });
        }
        console.log("Error loading message from backend", data);
      },
      login: async (email, password) => {
        const response = await fetch(getStore().BACKEND_URL + "/api/login", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        console.log(data);
        if (data.user) {
          setStore({ user: data.user });
        }
        setStore({ isLoggedIn: data.logged });

        //const data = await setStore({ message: data.message }) para guardar informacion en el store
        //.catch(error =>  verificar si hay errores
      },

      profileimg: async (formData) => {
        // fetching data from the backend
        const response = await fetch(getStore().BACKEND_URL + "/api/profile", {
          method: "POST",
          body: formData,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        //const data = await setStore({ message: data.message }) para guardar informacion en el store
        //.catch(error =>  verificar si hay errores
        console.log("Error loading message from backend", data);
      },
      editUser: async (user) => {
        console.log(user);
        try {
          let body = new FormData();
          for (let key in user) {
            body.append(key, user[key]);
          }
          console.log("dios te ama ");
          const resp = await fetch(
            getStore().BACKEND_URL + "/api/profileuser",
            {
              method: "PUT",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: body,
            }
          );
          const data = await resp.json();
          setStore({ user: data.user });
        } catch (e) {}
      },

      verify: async () => {
        const response = await fetch(getStore().BACKEND_URL + "/api/verify", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setStore({ user: data.user, isLoggedIn: data.logged });
      },
      logout: async () => {
        localStorage.clear();
        setStore({ user: {}, isLoggedIn: false });
      },

      reserve: async (reserve, user_id) => {
        // fetching data from the backend
        const response = await fetch(getStore().BACKEND_URL + "/api/reserve", {
          method: "POST",
          body: JSON.stringify(reserve),
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          swal({
            text: "Reserva realizada",
            icon: "success",
          });
          getActions().get_reserve(user_id);
        } else {
          swal({
            text: "Error en la reserva",
            icon: "error",
          });
        }
        console.log(data);
        console.log(response);
      },
      get_reserve: async () => {
        const response = await fetch(getStore().BACKEND_URL + "/api/reserve", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        console.log(data);
        setStore({
          user_reserve: data,
        });
      },
      get_repeat_reserve: async (id) => {
        const response = await fetch(
          getStore().BACKEND_URL + "/api/get_repeat_reserve/" + id,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setStore({
          user_repeat_reserve: data.reserve.moto,
        });
      },
      delete_reserve: async (reserve_id, user_id) => {
        const response = await fetch(
          getStore().BACKEND_URL + "/api/delete_reserve/" + reserve_id,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        if (data.mensaje) {
          swal({
            text: data.mensaje,
            icon: "success",
          });
          getActions().get_reserve(user_id);
        } else {
          swal({
            text: data,
            icon: "error",
          });
        }
      },
      logout: async () => {
        localStorage.clear();
        setStore({ user: {}, isLoggedIn: false });
      },
    },
  };
};

export default getState;
