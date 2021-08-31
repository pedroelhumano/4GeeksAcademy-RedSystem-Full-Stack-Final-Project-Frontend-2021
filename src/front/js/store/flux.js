import { URL } from "../config/index";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				id: "",
				email: "",
				token: "",
				expires: ""
			},
			message: "",
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
			getToken: () => {
				const tokenLocal = localStorage.getItem("token");
				const userLocal = JSON.parse(localStorage.getItem("user"));
				setStore({
					user: {
						token: tokenLocal,
						user: userLocal
					}
				});
				console.log("__Token__", tokenLocal);
				console.log("__User__", JSON.stringify(userLocal));
			},
			hacerLogin: user => {
				fetch(URL + "login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json;charset=UTF-8"
					},
					body: JSON.stringify(user)
				})
					.then(res => res.json())
					.then(data => {
						console.log("__Data__", data);
						if (data.hasOwnProperty("token")) {
							const dataUser = {
								email: data.email,
								expires: data.expires,
								id: data.id,
								perfil: data.administrador,
								token: data.token
							};
							setStore({ user: { ...dataUser } });

							if (typeof Storage !== "undefined") {
								localStorage.setItem("token", data.token);
								localStorage.setItem("user", JSON.stringify(data.user));
							} else {
								// LocalStorage no soportado en el navegador
							}
						} else {
							setStore({ message: data.msg });
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},
			borrarToken: () => {
				setStore({
					user: {
						token: "",
						user: ""
					}
				});
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				/* fetch(`${URL}hello`)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error)); */
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
