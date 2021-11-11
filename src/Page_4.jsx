import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseContext, UseColorContext } from "./Contract/Context";

const Page_4 = () => {
  const { color, setColor } = UseColorContext();
  const { web3, Contract } = UseContext();
  var address = sessionStorage.getItem("address");
  const [number, number_] = useState("");
  const [day, day_] = useState("");
  const [month, month_] = useState("");
  const [year, year_] = useState("");
  const [category, category_] = useState("");
  const [data, data_] = useState("");
  const [Length_C, Length_C_] = useState("");
  const [klick, klick_] = useState(0);
  sessionStorage.setItem("Length_C", Length_C);
  sessionStorage.setItem("number", number);
  sessionStorage.setItem("data", data);
  sessionStorage.setItem("category", category);
  let w = sessionStorage.getItem("w");
  setColor(w);
  const [colo, colo_] = useState(w);
  sessionStorage.setItem("colo", colo);

  async function Completion_card() {
    klick_(1);
    if (
      number != "" &&
      day != "" &&
      month != "" &&
      year != "" &&
      category != ""
    ) {
      try {
        await Contract.methods
          .Completion_card(number, day, month, year, category)
          .send({ from: address });
        var l = await Contract.methods.Length().call({ from: address });
        Length_C_(l[2]);
        number_("");
        day_("");
        month_("");
        year_("");
        category_("");
        let b = await Contract.methods.Card().call({ from: address });
        number_("Номер: " + b[0]);
        let days = b[1];
        let months = b[2];
        if (days < 10) day = "0" + b[1];
        if (month < 10) months = "0" + b[2];
        data_("Дата: " + days + "." + months + "." + b[3] + " г.");
        category_("Категория: " + b[4]);
        document.location.href = "http://localhost:3000/Page_2";
      } catch {
        alert("Ошибкой может послужить: \n 1. Неверно заполненные данные.");
        number_("");
        day_("");
        month_("");
        year_("");
        category_("");
        klick_(0);
      }
    } else {
      alert(
        "Ошибкой может послужить: \n 1. Убедитесь, что все поля заполнены."
      );
      klick_(0);
    }
  }

  async function A() {
    category_("A");
  }

  async function B() {
    category_("B");
  }

  async function C() {
    category_("C");
  }

  async function back() {
    var l = await Contract.methods.Length().call({ from: address });
    Length_C_(l[2]);

    document.location.href = "http://localhost:3000/Page_2";
  }

  return (
    <>
      <header className="navbar">
        <button className="text" onClick={() => back()}>
          НАЗАД
        </button>
      </header>
      <br />

      <center>
        <div className="message">
          <h2 style={{ color: "#6f6582" }}>ЗАПОЛНЕНИЕ ДАННЫХ</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <input
                className="input"
                type="number"
                min="000"
                max="999"
                placeholder="НОМЕР"
                value={number}
                onChange={(e) => number_(e.target.value)}
              />
              <br />
              <br />
              <input
                className="input"
                type="number"
                min="1"
                max="31"
                placeholder="ДЕНЬ"
                value={day}
                onChange={(e) => day_(e.target.value)}
              />
              <br />
              <br />
              <input
                className="input"
                type="number"
                min="1"
                max="12"
                placeholder="МЕСЯЦ"
                value={month}
                onChange={(e) => month_(e.target.value)}
              />
              <br />
              <br />
              <input
                className="input"
                type="number"
                min="2000"
                max="2100"
                placeholder="ГОД"
                value={year}
                onChange={(e) => year_(e.target.value)}
              />
              <br />
              <br />
              {category != "A" && (
                <button className="btn" onClick={() => A()}>
                  A
                </button>
              )}
              {category == "A" && (
                <button className="btn2" onClick={() => A()}>
                  A
                </button>
              )}
              &nbsp;
              {category != "B" && (
                <button className="btn" onClick={() => B()}>
                  B
                </button>
              )}
              {category == "B" && (
                <button className="btn2" onClick={() => B()}>
                  B
                </button>
              )}
              &nbsp;
              {category != "C" && (
                <button className="btn" onClick={() => C()}>
                  C
                </button>
              )}
              {category == "C" && (
                <button className="btn2" onClick={() => C()}>
                  C
                </button>
              )}
              <br />
              <br />
            </div>
          </div>
          {klick == 0 && (
            <button className="button" onClick={() => Completion_card()}>
              ЗАРЕГИСТРИРОВАТЬ
            </button>
          )}
          {klick == 1 && <button className="buttonn">ЗАРЕГИСТРИРОВАТЬ</button>}
          <br />
          <br />
        </div>
      </center>
    </>
  );
};
export default Page_4;
