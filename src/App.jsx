import "./styles/app.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import LogIn from "./components/LogIn";
import { loginUrl } from "./settings";

// import LogOut from "./components/LogOut";

function App() {
  const [loggedIn, setLoggedIn] = useState("");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (loggedIn === "") {
      let userNameLS = localStorage.getItem("userName");
      let loggedInLS = localStorage.getItem("loggedIn");
      let userRoleLS = JSON.parse(localStorage.getItem("userRole"));

      setUserName(userNameLS);
      setLoggedIn(loggedInLS);
      setUserRole(userRoleLS);
    }
  });

  const logInFunc = async (user) => {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    console.log(data);

    if (data.code !== null && data.code !== "" && data.code !== undefined) {
      alert(data.message);
      setLoggedIn(false);
    }

    if (
      data.username !== null &&
      data.username !== "" &&
      data.username !== undefined
    ) {
      setUserName(data.username);
      setUserRole(data.role0);
      let roleArray = [data.role0, data.role1];
      setUserRole(data.role0, data.role1);
      localStorage.setItem("userRole", JSON.stringify(roleArray));

      setLoggedIn(true);
      localStorage.setItem("userName", data.username);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", data.token);
    }
    window.location.reload();
  };

  return (
    <div className="App">
      <Header />
      <NavBar />
      {!loggedIn && <LogIn onAdd={logInFunc} />}
      <br></br>

      <Footer />
    </div>
  );
}

export default App;
