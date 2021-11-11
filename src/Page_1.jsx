import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseColorContext, UseContext } from "./Contract/Context";
import wow from './wow.jpg'

const Page_1 = () => {
  const { color, setColor } = UseColorContext();
  const { web3, Contract } = UseContext();
  const [address, address_] = useState("");
  const [password, passwords] = useState("");
  const [login, logins] = useState("");
  const [FIO, FIO_] = useState("");
  const [expertise, expertise_] = useState("");
  const [number, number_] = useState("");
  const [data, data_] = useState("");
  const [category, category_] = useState("");
  const [Length_T, Length_T_] = useState("");
  const [Length_D, Length_D_] = useState("");
  const [Length_C, Length_C_] = useState("");
  const [Length_F, Length_F_] = useState("");
  const [role, role_] = useState("");
  const [colo, colo_] = useState("");
  const [score, score_] = useState("");
  const [klick, klick_] = useState(0);
  sessionStorage.setItem("address", address);
  sessionStorage.setItem("FIO", FIO);
  sessionStorage.setItem("expertise", expertise);
  sessionStorage.setItem("number", number);
  sessionStorage.setItem("data", data);
  sessionStorage.setItem("category", category);
  sessionStorage.setItem("Length_T", Length_T);
  sessionStorage.setItem("Length_D", Length_D);
  sessionStorage.setItem("Length_C", Length_C);
  sessionStorage.setItem("role", role);
  sessionStorage.setItem("colo", colo);
  sessionStorage.setItem("score", score);

  async function Authorization() {
    klick_(1);
    if (login != "" && password != "") {
    try {
      let adr = await Contract.methods.Authorization(login).call();
      address_(adr[0]);
      await web3.eth.personal.unlockAccount(adr[0], password);
      web3.eth.defaultAccount = adr[0];
      FIO_("ФИО: " + adr[1]);
      expertise_(adr[2]);
      if (adr[3] == true) colo_(true);
      role_(adr[4]);
      let a = await web3.eth.getBalance(adr[0]);
      score_(a / 1000000000000000000);

      if (adr[5] != "NO") {
        let b = await Contract.methods.Card().call({ from: adr[0] });
        number_(b[0]);
        let day = b[1];
        let month = b[2];
        if (day < 10) day = "0" + b[1];
        if (month < 10) month = "0" + b[2];
        data_("Дата: " + day + "." + month + "." + b[3] + " г.");
        category_("Категория: " + b[4]);
      }

      var l = await Contract.methods.Length().call({ from: adr[0] });
      Length_T_(l[0]);
      Length_D_(l[1]);
      Length_C_(l[2]);
      Length_F_(l[3]);

      document.location.href = "http://localhost:3000/Page_2";
    } catch (e) {
      alert("Ошибка авторизации\n 1. Неправильный логин или пароль!");klick_(0);
    }} else {alert(
      "Ошибкой может послужить: \n 1. Убедитесь, что все поля заполнены."
    );
  klick_(0);}
  }

  return (
    <>
      <header className="navbar2">
        <div className="flex">
          <Link to="./help">
            <button className="text">ПОМОЩЬ</button>
          </Link>
          &nbsp;
          <button className="text" onClick={() => setColor(!color)}>
            ТЕМА
          </button>
        </div>
      </header>
      <center>
        <br />
        <div className="message">
          <center>
            <h2> ВХОД </h2>
          </center>
          <center>
            <input
              type="text"
              className="input"
              placeholder="ЛОГИН"
              value={login}
              onChange={(e) => logins(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="userPassword"
              placeholder="ПАРОЛЬ"
              type="password"
              className="input"
              value={password}
              onChange={(e) => passwords(e.target.value)}
            />
            <br />
            <br />
          
            {klick == 0 &&<button className="button" onClick={Authorization}>
              АВТОРИЗОВАТЬСЯ
            </button>}
            {klick == 1 && (
              <button className="buttonn">АВТОРИЗОВАТЬСЯ</button>
            )}

            <br />
            <div style={{ color: "#6b65829c" }}>
              <label>______________Нет профиля______________</label>
            </div>

            <Link to="./Page_3">
              <li className="button">ЗАРЕГИСТРИРОВАТЬСЯ</li>
            </Link>
          </center>
          <br />
        </div>
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
      </center>
      <center>
        <div style={{ color: "#6b65829c", fontSize: "20px" }}>
          <label>
            Разработчик: Склярова Милена Владимировна
            <br /> ГБПОУ РО "ТКМП"
          </label>
        </div>
      </center>
      <br />
      <br />
    </>
  );
};
export default Page_1;
