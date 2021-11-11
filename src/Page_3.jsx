import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseContext } from "./Contract/Context";

const Page_3 = () => {
  const { web3, Contract } = UseContext();
  const [last_name, last_names] = useState("");
  const [name, names] = useState("");
  const [patronymic, patronymics] = useState("");
  const [expertise, expertises] = useState("");
  const [login, logins] = useState("");
  const [klick, klick_] = useState(0);
  let [password, passwords] = useState("");
  let [password2, passwords2] = useState("");

  async function Registration() {
    klick_(1);
    if (
      last_name != "" &&
      name != "" &&
      patronymic != "" &&
      expertise != "" &&
      login != ""
    ) {
      try {
        if (password == password2) {
          let adr = await web3.eth.personal.newAccount(password);
          await web3.eth.personal
            .unlockAccount("0xc5f1731B0efF9aD42D60F2c8C34F51f6d5041Cb3", "0000")
            .then(console.log);
          await web3.eth.sendTransaction({
            from: "0xc5f1731B0efF9aD42D60F2c8C34F51f6d5041Cb3",
            to: adr,
            value: "50000000000000000000",
          });
          await web3.eth.personal.unlockAccount(adr, password);

          await Contract.methods
            .Registration(
              last_name + " " + name + " " + patronymic,
              expertise,
              login
            )
            .send({ from: adr });
          document.location.href = "http://localhost:3000/Page_1";
        } else {
          alert("Ошибкой может послужить: \n 1. пароли не совпадают!");
          passwords("");
          passwords2("");
          klick_(0);
        }
      } catch {
        alert(
          "Ошибкой может послужить: \n 1. Этот логин уже используется."
        );
        logins("");
        klick_(0);
      }
    }
    else {
      alert(
        "Ошибкой может послужить: \n 1. Убедитесь, что все поля заполнены."
      );
    klick_(0);}
  }

  return (
    <>
      <header className="navbar">
        <Link to="./Page_1">
          <button className="text">НАЗАД</button>
        </Link>
      </header>
      <center>
        <br />
        <div
          className="message"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p>
            <div style={{ fontSize: "45px", fontWeight: "bolder" }}>
              <center>РЕГИСТРАЦИЯ</center>
            </div>
            <br />
            <input
              type="text"
              placeholder="ФАМИЛИЯ"
              className="input"
              value={last_name}
              onChange={(e) => last_names(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="ИМЯ"
              className="input"
              value={name}
              onChange={(e) => names(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="ОТЧЕСТВО"
              className="input"
              value={patronymic}
              onChange={(e) => patronymics(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              className="input"
              placeholder="СТАЖ"
              value={expertise}
              onChange={(e) => expertises(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="ЛОГИН"
              className="input"
              value={login}
              onChange={(e) => logins(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              id="userPassword"
              type="password"
              placeholder="ПАРОЛЬ"
              className="input"
              value={password}
              onChange={(e) => passwords(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="ПОДТВЕРДИТЕ ПАРОЛЬ"
              id="userPassword"
              type="password"
              className="input"
              value={password2}
              onChange={(e) => passwords2(e.target.value)}
            />
            <br />
            <br />
            {klick == 0 && (
              <button className="button" onClick={() => Registration()}>
                ЗАРЕГИСТРИРОВАТЬСЯ
              </button>
            )}
            {klick == 1 && (
              <button className="buttonn">ЗАРЕГИСТРИРОВАТЬСЯ</button>
            )}
          </p>
        </div>
      </center>
    </>
  );
};
export default Page_3;
