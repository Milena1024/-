import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseContext, UseColorContext } from "./Contract/Context";

const Page_5 = () => {
  const { color, setColor } = UseColorContext();
  const { web3, Contract } = UseContext();
  const [name, name_] = useState("");
  var address = sessionStorage.getItem("address");
  const [category, category_] = useState("");
  const [price, price_] = useState("");
  const [srok, srok_] = useState("");
  const [Length_T, Length_T_] = useState("");
  const [Length_C, Length_C_] = useState("");
  const [klick, klick_] = useState(0);
  sessionStorage.setItem("Length_T", Length_T);
  sessionStorage.setItem("Length_C", Length_C);
  let w = sessionStorage.getItem("w");
  setColor(w);
  const [colo, colo_] = useState(w);
  sessionStorage.setItem("colo", colo);

  async function Registration_transport() {
    klick_(1);
    if (category != "" && price != "" && srok != "") {
      try {
        await Contract.methods
          .Registration_transport(category, price, srok, name)
          .send({ from: address });
        var l = await Contract.methods.Length().call({ from: address });
        Length_T_(l[0]);
        Length_C_(l[2]);
        category_("");
        price_("");
        srok_("");name_("");
        document.location.href = "http://localhost:3000/Page_2";
      } catch {
        alert(
          "Ошибкой может послужить: \n 1. Неверно заполненные данные; \n 2. Неверно указанная категория; \n 3. Неверно указан вин."
        );
        category_("");
        price_("");
        srok_("");name_("");
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
    Length_T_(l[0]);
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
          <h2 style={{ color: "#6f6582" }}>РЕГИСТРАЦИЯ ТРАНСПОРТА</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
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
              <input
                className="input"
                type="text"
                placeholder="ВИН"
                value={name}
                onChange={(e) => name_(e.target.value)}
              />
              <br />
              <br />
              <input
                className="input"
                type="number"
                min="1"
                placeholder="СТОИМОСТЬ"
                value={price}
                onChange={(e) => price_(e.target.value)}
              />
              <br />
              <br />
              <input
                className="input"
                type="number"
                min="1"
                placeholder="СРОК ЭКСПЛУАТАЦИИ"
                value={srok}
                onChange={(e) => srok_(e.target.value)}
              />
              <br />
              <br />
            </div>
          </div>
          <center>
            {klick == 0 && (
              <button
                className="button"
                onClick={() => Registration_transport()}
              >
                ЗАРЕГИСТРИРОВАТЬ
              </button>
            )}
            {klick == 1 && (
              <button className="buttonn">ЗАРЕГИСТРИРОВАТЬ</button>
            )}
          </center>
          <br />
        </div>
      </center>
    </>
  );
};
export default Page_5;
