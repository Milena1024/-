import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseColorContext, UseContext } from "./Contract/Context";

const Page_2 = () => {
  const { web3, Contract } = UseContext();
  const { color, setColor } = UseColorContext();
  const [text, text_] = useState("");
  const [date, date_] = useState("");
  const [hour, hour_] = useState("");
  const [uv, uv3_] = useState([]);
  const [date3, date3_] = useState("");
  const [hour3, hour3_] = useState("");
  const [price3, price3_] = useState("");
  const [nums3, nums3_] = useState("");
  const [df3, df3_] = useState("");
  const [i_C, ic] = useState(0);
  const [i_Z, iz] = useState(0);
  const [i_t, it] = useState(0);
  const [i_F, iF] = useState(0);
  const [is, is_] = useState(0);
  const [vin, vin_] = useState("");
  const [number2, number2_] = useState("");
  const [data2, data2_] = useState("");
  const [status, status_] = useState("");
  const [date2, date2_] = useState("");
  const [hour2, hour2_] = useState("");
  const [date5, date5_] = useState("");
  const [hour5, hour5_] = useState("");
  const [category2, category2_] = useState("");
  const [price, price_] = useState("");
  const [srok, srok_] = useState("");
  const [nume, nume_] = useState("");
  const [te, te_] = useState("");
  const [pr, pr_] = useState("");
  const [DTP_FINE, DTP_FINE_] = useState("");
  const [col, col_] = useState("");
  const [col2, col2_] = useState("");
  const [c2, c2_] = useState("");
  const [name, name_] = useState("");
  const [sname, sname_] = useState("");
  const [fir, fir_] = useState("");
  const [str, str_] = useState("");
  const [zaim, zaim_] = useState("");
  const [sumh, sumh_] = useState("");
  const [minuth, minuth_] = useState("");
  const [count2, count2_] = useState("");
  const [count3, count3_] = useState("");
  const [time, time_] = useState("");
  const [hours, hours_] = useState("");
  const [mess, mess_] = useState("");
  const [messe, messe_] = useState("");
  const [mas, mass] = useState([
    "СООБЩЕНИЯ",
    "ЗАПРОСЫ",
    "УВЕДОМЛЕНИЯ",
    "ОФОРМЛЕНИЕ",
    "УДОСТОВЕРЕНИЕ",
    "ТРАНСПОРТ",
    "ПОМОЩЬ",
    "ТЕМА",
  ]);
  const [mas2, mass2] = useState([
    "СООБЩЕНИЯ",
    "УВЕДОМЛЕНИЯ",
    "УДОСТОВЕРЕНИЕ",
    "ТРАНСПОРТ",
    "ПОМОЩЬ",
    "ТЕМА",
  ]);
  const [mas3, mass3] = useState([
    "СООБЩЕНИЯ",
    "СТРАХОВКИ",
    "БАНК",
    "ПОМОЩЬ",
    "ТЕМА",
  ]);
  const [mas4, mass4] = useState(["КРЕДИТЫ", "ПОМОЩЬ", "ТЕМА"]);
  const [_1, _1_] = useState(0);
  const [_3, _3_] = useState(0);
  const [_2, _2_] = useState(0);
  const [_4, _4_] = useState(0);
  const [_5, _5_] = useState(0);
  const [_6, _6_] = useState(0);
  const [_7, _7_] = useState(0);
  const [_8, _8_] = useState(0);
  const [_9, _9_] = useState(0);
  const [_10, _10_] = useState(0);
  const [_11, _11_] = useState(0);
  const [klick, klick_] = useState(0);
  const [klick2, klick2_] = useState(0);
  const [klick3, klick3_] = useState(0);
  const [klick4, klick4_] = useState(0);
  const [klick5, klick5_] = useState(0);
  const [klick6, klick6_] = useState(0);
  const [klick7, klick7_] = useState(0);
  const [klick8, klick8_] = useState(0);
  const [klick9, klick9_] = useState(0);
  const [klick10, klick10_] = useState(0);
  const [klick11, klick11_] = useState(0);
  const [klick12, klick12_] = useState(0);
  const address = sessionStorage.getItem("address");
  const FIO = sessionStorage.getItem("FIO");
  const expertise = sessionStorage.getItem("expertise");
  const number = sessionStorage.getItem("number");
  const DT = sessionStorage.getItem("data");
  const category = sessionStorage.getItem("category");
  const T = sessionStorage.getItem("Length_T");
  const D = sessionStorage.getItem("Length_D");
  const C = sessionStorage.getItem("Length_C");
  const F = sessionStorage.getItem("Length_F");
  let colo = sessionStorage.getItem("colo");
  const role = sessionStorage.getItem("role");
  const score = sessionStorage.getItem("score");
  const [score_two, score_two_] = useState(score);
  const [data, data_] = useState(DT);
  const [Length_D, D_] = useState(D);
  const [Length_C, C_] = useState(C);
  const [Length_T, T_] = useState(T);
  const [Length_F, F_] = useState(F);
  const [Length_S, S_] = useState(0);
  const [w, w_] = useState(colo);
  sessionStorage.setItem("w", w);
  setColor(w);

  //setInterval(() => web3.eth.personal.unlockAccount(address, password), 30000);

  async function Viewing_MESSAGES(b) {
    klick11_(0);
    klick12_(0);
    if (b == "+2") {
      let a = number2 + 1;
      if (a <= count3) {
        number2_(a);
        let m = await Contract.methods.Viewing_REQEST(a).call();
        mess_(m);
        var d = new Date(m[2] * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2);
        hours_(h + ":" + min);
        time_(dd + "." + mm + "." + yyyy + " г.");
      }
    }
    if (b == "-2") {
      let a = number2 - 1;
      if (a > 0) {
        number2_(a);
        let m = await Contract.methods.Viewing_REQEST(a).call();
        mess_(m);
        var d = new Date(m[2] * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2);
        hours_(h + ":" + min);
        time_(dd + "." + mm + "." + yyyy + " г.");
      }
    }
  }

  async function Loan_from_a_bank() {
    klick7_(1);
    try {
      zaim_("prog");
      if (sumh != "") {
        await Contract.methods
          .Request_loan(sumh, 1)
          .send({ from: address });
        zaim_("");
        minuth_("");
        sumh_("");
        count2_(1);
      } else {
        minuth_("");
        sumh_("");
        alert("ОШИБКА, УБЕДИТЕСЬ В ТОМ, ЧТО ВСЕ ПОЛЯ ЗАПОЛНЕНЫ!");
        zaim_("zaim");
      }
    } catch {
      minuth_("");
      sumh_("");
      alert(
        "Ошибкой может послужить: \n 1. Ранее был отправлен запрос на креди."
      );
      zaim_("zaim");
    }
    var l = await Contract.methods.Length().call({ from: address });
    C_(l[2]);
    klick7_(0);
  }

  async function exit(a) {
    if (a == "_1_") _1_(0);
    if (a == "_2_") _2_(0);
    if (a == "_3_") {
      _3_(0);
      klick2_(0);
    }
    if (a == "_4_") _4_(0);
    if (a == "_5_") _5_(0);
    if (a == "_6_") {
      klick5_(0);
      _6_(0);
      klick_(0);
      nume_("");
      te_("");
      pr_("");
      DTP_FINE_("");
      vin_("");
    }
    if (a == "_7_") _7_(0);
    if (a == "_8_") _8_(0);
    if (a == "_9_") _9_(0);
    if (a == "_10_") {
      _10_(0);
      count2_(0);
    }
    if (a == "_11_") _11_(0);
  }

  async function list(e) {
    if (e.target.value == "ПОМОЩЬ")
      document.location.href = "http://localhost:3000/help2";
    if (e.target.value == "УДОСТОВЕРЕНИЕ") {
      _1_(1);
    }
    if (e.target.value == "БАНК") {
      _10_(1);
      var l = await Contract.methods.Length().call({ from: address });
      console.log(l)
      if (l[6] != 0) count2_(1);
      for (var i = 1; i < l[5]; i++) {
        var h = await Contract.methods
          .Viewing_REQEST(i)
          .call({ from: address });
      }
      klick7_(0);
    }
    if (e.target.value == "КРЕДИТЫ") {
      klick11_(0);
      klick12_(0);
      var l = await Contract.methods.Length().call({ from: address });
      count3_(l[5]);
      if (l[5] != 0) {
        number2_(1);
        let m = await Contract.methods.Viewing_REQEST(1).call();
        mess_(m);
        var d = new Date(m[2] * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2);
        hours_(h + ":" + min);
        time_(dd + "." + mm + "." + yyyy + " г.");
      }
      _11_(1);
    }
    if (e.target.value == "СТРАХОВКИ") {
      klick3_(0);
      klick4_(0);
      try {
        _9_(1);
        var l = await Contract.methods.Length().call({ from: address });
        S_(l[4]);
        is_(1);
        fir_(
          await Contract.methods
            .Request_For_Insurance(1)
            .call({ from: address })
        );
        let fi = await Contract.methods
          .Request_For_Insurance(1)
          .call({ from: address });
        var a = fi[3];
        var d = new Date(a * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2),
          time,
          hours;
        hours = h + ":" + min;
        time = dd + "." + mm + "." + yyyy + " г.";
        hour5_(hours);
        date5_(time);
      } catch {
        _9_(1);
        is_(0);
      }
    }

    if (e.target.value == "ЗАПРОСЫ") {
      klick9_(0);
      klick10_(0);
      var l = await Contract.methods.Length().call({ from: address });
      D_(l[1]);
      _4_(1);
      let b = await Contract.methods.Messages_DPS(1).call({ from: address });
      if (b[4] != "") {
        if (b[0] == 0) number2_("Номер: 000");
        else number2_("Номер: " + b[0]);
        let day2 = b[1];
        let month2 = b[2];
        if (day2 < 10) day2 = "0" + b[1];
        if (month2 < 10) month2 = "0" + b[2];
        data2_("Дата: " + day2 + "." + month2 + "." + b[3] + " г.");
        status_(b[4]);
        var a = b[5];
        var d = new Date(a * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2),
          time,
          hours;
        hours = h + ":" + min;
        time = dd + "." + mm + "." + yyyy + " г.";
        hour2_(hours);
        date2_(time);
        iz(1);
      }
    }

    if (e.target.value == "СООБЩЕНИЯ") {
      try {
        var l = await Contract.methods.Length().call({ from: address });
        C_(l[2]);
        let z = await Contract.methods
          .Messages_CLIENT(1)
          .call({ from: address });
        text_(z[0]);
        var a = z[1];
        var d = new Date(a * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2),
          time,
          hours;
        hours = h + ":" + min;
        time = dd + "." + mm + "." + yyyy + " г.";
        hour_(hours);
        date_(time);
        ic(1);
        _2_(1);
      } catch {
        _2_(1);
        ic(0);
      }
    }

    if (e.target.value == "УВЕДОМЛЕНИЯ") {
      klick5_(0);
      klick6_(0);
      try {
        var l = await Contract.methods.Length().call({ from: address });
        F_(l[3]);
        let z = await Contract.methods.Fine(1).call({ from: address });
        uv3_(z);
        if (z[4] == 1) df3_("ДТП");
        else df3_("ШТРАФ");
        var a = z[2];
        var d = new Date(a * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2),
          time,
          hours;
        hours = h + ":" + min;
        time = dd + "." + mm + "." + yyyy + " г.";
        hour3_(hours);
        date3_(time);
        iF(1);
        let m = await Contract.methods.Transport(1).call({ from: address });
        str_(m[4]);
        _6_(1);
      } catch {
        _6_(1);
        iF(0);
      }
    }

    if (e.target.value == "ТРАНСПОРТ") {
      nums3_("");
      var l = await Contract.methods.Length().call({ from: address });
      T_(l[0]);
      if (Length_T > 0) {
        let z = await Contract.methods.Transport(1).call({ from: address });
        category2_("Категория: " + z[0]);
        price_(z[1]);
        srok_(z[2]);
        name_(z[3]);
        price3_(z[4]);
        it(1);
      }
      _3_(1);
    }
    if (e.target.value == "ТЕМА") {
      await Contract.methods.Color().send({ from: address });
      setColor(!w);
      w_(!w);
    }
    if (e.target.value == "ОФОРМЛЕНИЕ") {
      _5_(1);
    }
    e.target.value = "";
  }

  async function shtraf(el_2) {
    var dtp = 0;
    var sht = 0;
    var f = await Contract.methods.Numb(el_2).call();
    var l = await Contract.methods.Length().call({ from: address });
    if (l[3] != 0) {
      for (var i = 1; i <= l[3]; i++) {
        let z = await Contract.methods.Fine(i).call({ from: address });
        if (z[3] == 1) dtp++;
        if (z[3] == 2) sht++;
      }
    }
    c2_(l[3]);
    col_(dtp);
    col2_(sht);
    nums3_(
      Math.abs(
        Math.round(
          parseFloat(
            +((price * Math.abs(1 - srok / 10) * 1) / 10) +
              +((sht * 2) / 10) +
              +(dtp - (expertise * 2) / 10)
          ) * 100
        ) / 100
      )
    );
  }

  async function Messages_CLIENT(el_2) {
    var i = i_C;
    try {
      if (el_2 == "+") {
        if (i++ < Length_C) {
          let z = await Contract.methods
            .Messages_CLIENT(i)
            .call({ from: address });
          ic(i);
          text_(z[0]);
          var a = z[1];
          var d = new Date(a * 1000),
            yyyy = d.getFullYear(),
            mm = ("0" + (d.getMonth() + 1)).slice(-2),
            dd = ("0" + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ("0" + d.getMinutes()).slice(-2),
            time,
            hours;
          hours = h + ":" + min;
          time = dd + "." + mm + "." + yyyy + " г.";
          hour_(hours);
          date_(time);
        }
      }
    } catch {
      alert("Ошибка!");
    }
    try {
      if (el_2 == "-") {
        if (i-- > !0) {
          let z = await Contract.methods
            .Messages_CLIENT(i)
            .call({ from: address });
          text_(z[0]);
          var a = z[1];
          var d = new Date(a * 1000),
            yyyy = d.getFullYear(),
            mm = ("0" + (d.getMonth() + 1)).slice(-2),
            dd = ("0" + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ("0" + d.getMinutes()).slice(-2),
            time,
            hours;
          hours = h + ":" + min;
          time = dd + "." + mm + "." + yyyy + " г.";
          hour_(hours);
          date_(time);
          ic(i);
        }
      }
    } catch {
      alert("Ошибка!");
    }
  }

  async function Transport(el_2) {
    var i = i_t;
    try {
      if (el_2 == "+") {
        if (i++ < Length_T) {
          let z = await Contract.methods.Transport(i).call({ from: address });
          category2_("Категория: " + z[0]);
          price_(z[1]);
          srok_(z[2]);
          name_(z[3]);
          price3_(z[4]);
          it(i);
        }
      }
    } catch {
      alert("Ошибка!");
    }
    try {
      if (el_2 == "-") {
        if (i-- > !0) {
          let z = await Contract.methods.Transport(i).call({ from: address });
          category2_("Категория: " + z[0]);
          price_(z[1]);
          srok_(z[2]);
          name_(z[3]);
          price3_(z[4]);
          it(i);
        }
      }
    } catch {
      alert("Ошибка!");
    }
  }

  async function Request_extension() {
    klick8_(1);
    try {
      await Contract.methods.Request_extension().send({ from: address });
    } catch {
      alert(
        "Ошибкой может послужить: \n 1. Незаполненные данные водительского удостоверения; \n 2. Ранее запрос был отправлен."
      );
    }
    var l = await Contract.methods.Length().call({ from: address });
    D_(l[1]);
    C_(l[2]);
    klick8_(0);
  }

  async function Messages_DPS(el_2) {
    klick9_(0);
    klick10_(0);
    var i = i_Z;
    if (el_2 == "+") {
      if (i++ < Length_C) {
        let b = await Contract.methods.Messages_DPS(i).call({ from: address });
        if (b[4] != "") {
          if (b[0] == 0) number2_("Номер: 000");
          else number2_("Номер: " + b[0]);
          let day2 = b[1];
          let month2 = b[2];
          if (day2 < 10) day2 = "0" + b[1];
          if (month2 < 10) month2 = "0" + b[2];
          data2_("Дата: " + day2 + "." + month2 + "." + b[3] + " г.");
          status_(b[4]);
          var a = b[5];
          var d = new Date(a * 1000),
            yyyy = d.getFullYear(),
            mm = ("0" + (d.getMonth() + 1)).slice(-2),
            dd = ("0" + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ("0" + d.getMinutes()).slice(-2),
            time,
            hours;
          hours = h + ":" + min;
          time = dd + "." + mm + "." + yyyy + " г.";
          hour2_(hours);
          date2_(time);
          iz(i);
        }
      }
    }
    if (el_2 == "-") {
      if (i-- > !0) {
        let b = await Contract.methods.Messages_DPS(i).call({ from: address });
        if (b[4] != "") {
          if (b[0] == 0) number2_("Номер: 000");
          else number2_("Номер: " + b[0]);
          let day2 = b[1];
          let month2 = b[2];
          if (day2 < 10) day2 = "0" + b[1];
          if (month2 < 10) month2 = "0" + b[2];
          data2_("Дата: " + day2 + "." + month2 + "." + b[3] + " г.");
          status_(b[4]);
          var a = b[5];
          var d = new Date(a * 1000),
            yyyy = d.getFullYear(),
            mm = ("0" + (d.getMonth() + 1)).slice(-2),
            dd = ("0" + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ("0" + d.getMinutes()).slice(-2),
            time,
            hours;
          hours = h + ":" + min;
          time = dd + "." + mm + "." + yyyy + " г.";
          hour2_(hours);
          date2_(time);
          iz(i);
        }
      }
    }
  }

  async function Fine(el_2) {
    klick5_(0);
    klick6_(0);
    var i = i_F;
    if (el_2 == "+") {
      if (i++ < Length_F) {
        let z = await Contract.methods.Fine(i).call({ from: address });
        uv3_(z);
        if (z[3] == 1) df3_("ДТП");
        else df3_("ШТРАФ");
        var a = z[2];
        var d = new Date(a * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2),
          time,
          hours;
        hours = h + ":" + min;
        time = dd + "." + mm + "." + yyyy + " г.";
        hour3_(hours);
        date3_(time);
        iF(i);
        var l = await Contract.methods.Length().call({ from: address });
        for (var j = 1; j < l[0]; j++) {
          let m = await Contract.methods.Transport(j).call({ from: address });
          if (m[3] == z[6]) str_(m[4]);
        }
      }
    }
    if (el_2 == "-") {
      if (i-- > !0) {
        let z = await Contract.methods.Fine(i).call({ from: address });
        uv3_(z);
        if (z[3] == 1) df3_("ДТП");
        else df3_("ШТРАФ");
        var a = z[2];
        var d = new Date(a * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2),
          time,
          hours;
        hours = h + ":" + min;
        time = dd + "." + mm + "." + yyyy + " г.";
        hour3_(hours);
        date3_(time);
        iF(i);
        var l = await Contract.methods.Length().call({ from: address });
        for (var j = 1; j < l[0]; j++) {
          let m = await Contract.methods.Transport(j).call({ from: address });
          if (m[3] == z[6]) str_(m[4]);
        }
      }
    }
    col_(0);
    col2_(0);
  }

  async function Y() {
    klick9_(1);
    try {
      await Contract.methods.Request_extension(i_Z, 1).send({ from: address });
      var l = await Contract.methods.Length().call({ from: address });
      C_(l[2]);
      let b = await Contract.methods.Card().call({ from: address });
      let day = b[1];
      let month = b[2];
      if (day < 10) day = "0" + b[1];
      if (month < 10) month = "0" + b[2];
      data_("Дата: " + day + "." + month + "." + b[3] + " г.");

      let h = await Contract.methods.Messages_DPS(i_Z).call({ from: address });
      let day2 = h[1];
      let month2 = h[2];
      if (day2 < 10) day2 = "0" + h[1];
      if (month2 < 10) month2 = "0" + h[2];
      data2_("Дата: " + day2 + "." + month2 + "." + h[3] + " г.");
      status_(h[4]);
    } catch {
      alert(
        "Ошибкой может послужить: \n 1. Срок данных водительского удостоверения \n должен заканчиваться за месяц до отправки запроса"
      );
    }
    klick9_(0);
  }

  async function N() {
    klick10_(1);
    try {
      await Contract.methods.Request_extension(i_Z, 0).send({ from: address });
      var l = await Contract.methods.Length().call({ from: address });
      C_(l[2]);
      let b = await Contract.methods.Card().call({ from: address });
      let day = b[1];
      let month = b[2];
      if (day < 10) day = "0" + b[1];
      if (month < 10) month = "0" + b[2];
      data_("Дата: " + day + "." + month + "." + b[3] + " г.");

      let h = await Contract.methods.Messages_DPS(i_Z).call({ from: address });
      let day2 = h[1];
      let month2 = h[2];
      if (day2 < 10) day2 = "0" + h[1];
      if (month2 < 10) month2 = "0" + h[2];
      data2_("Дата: " + day2 + "." + month2 + "." + h[3] + " г.");
      status_(h[4]);
    } catch {
      alert(
        "Ошибкой может послужить: \n 1. Срок данных водительского удостоверения \n должен заканчиваться за месяц до отправки запроса"
      );
    }
    klick10_(0);
  }

  async function Y_N(a) {
    if (a == "+") {
      klick3_(0);
      klick4_(0);
      var i = is;
      if (a == "+") {
        if (i++ < Length_S) {
          fir_(
            await Contract.methods
              .Request_For_Insurance(i)
              .call({ from: address })
          );
          let fi = await Contract.methods
            .Request_For_Insurance(1)
            .call({ from: address });
          var a = fi[3];
          var d = new Date(a * 1000),
            yyyy = d.getFullYear(),
            mm = ("0" + (d.getMonth() + 1)).slice(-2),
            dd = ("0" + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ("0" + d.getMinutes()).slice(-2),
            time,
            hours;
          hours = h + ":" + min;
          time = dd + "." + mm + "." + yyyy + " г.";
          hour5_(hours);
          date5_(time);
        }
      }
      is_(i);
    }
    if (a == "-") {
      klick3_(0);
      klick4_(0);
      var i = is;
      if (i-- > !0) {
        fir_(
          await Contract.methods
            .Request_For_Insurance(i)
            .call({ from: address })
        );
        let fi = await Contract.methods
          .Request_For_Insurance(1)
          .call({ from: address });
        var a = fi[3];
        var d = new Date(a * 1000),
          yyyy = d.getFullYear(),
          mm = ("0" + (d.getMonth() + 1)).slice(-2),
          dd = ("0" + d.getDate()).slice(-2),
          hh = d.getHours(),
          h = hh,
          min = ("0" + d.getMinutes()).slice(-2),
          time,
          hours;
        hours = h + ":" + min;
        time = dd + "." + mm + "." + yyyy + " г.";
        hour5_(hours);
        date5_(time);
      }
      is_(i);
    }
  }

  async function Issuing_a_fine() {
    klick_(1);
    c2_("");
    let z = pr;
    let a = "";
    if (DTP_FINE == 1 && vin != "") a = vin;
    else a = nume;

    if (DTP_FINE == 2) {
      a = nume;
      z = 10;
    }

    if (nume != "" && te != "" && z != "" && DTP_FINE != "" && sname != "") {
      try {
        await Contract.methods
          .Issuing_a_fine(nume, te, z, DTP_FINE, sname, a)
          .send({ from: address });
        klick_(0);
        nume_("");
        te_("");
        pr_("");
        DTP_FINE_("");
        col_("");
        col2_("");
        sname_("");
        vin_("");
      } catch {
        alert(
          "Ошибкой может послужить: \n 1. Неверно указан номер водительского удостоверения; \n 2. Марка автомобиля не совпадает с маркой указанной в базе."
        );
        klick_(0);
      }
      nume_("");
      te_("");
      pr_("");
      DTP_FINE_("");
      col_("");
      col2_("");
      sname_("");
      vin_("");
    } else {
      alert(
        "Ошибкой может послужить: \n 1. Убедитесь, что все поля заполнены."
      );
      klick_(0);
    }
    var l = await Contract.methods.Length().call({ from: address });
    F_(l[3]);
  }

  async function changeHandler(event) {
    DTP_FINE_(event);
  }

  async function strahovka_vznos() {
    klick2_(1);
    try {
      await Contract.methods
        .strahovka_vznos(name, nums3 * 100)
        .send({ from: address });
    } catch {
      alert(
        "Ошибкой может послужить: \n 1. Запрос на оформления страховки ранее был отправлен."
      );
    }
    var l = await Contract.methods.Length().call({ from: address });
    C_(l[2]);
    klick2_(0);
  }

  async function Answer(event) {
    klick3_(0);
    klick4_(0);
    if (event == 1) klick3_(1);
    if (event == 2) klick4_(1);
    await Contract.methods
      .Answer(is, Number.parseInt(fir[2]), Number.parseInt(fir[1]), event)
      .send({ from: address });
    var l = await Contract.methods.Length().call({ from: address });
    S_(l[4]);
    is_(1);
    fir_(
      await Contract.methods.Request_For_Insurance(1).call({ from: address })
    );
    klick3_(0);
    klick4_(0);
  }

  async function dtp_pay(h) {
    klick5_(0);
    klick6_(0);
    if (h == 1 && score_two && Number.parseInt(uv[1])) {
      klick5_(1);
      let a = await Contract.methods.check(i_F).send({ from: address });
      if (a == "Скидка")
        await web3.eth.sendTransaction({
          from: address,
          to: "0xc5f1731B0efF9aD42D60F2c8C34F51f6d5041Cb3",
          value: (Number.parseInt(uv[1]) * 10000000000000000) / 2,
        });
      if (a == "Без скидки")
        await web3.eth.sendTransaction({
          from: address,
          to: "0xc5f1731B0efF9aD42D60F2c8C34F51f6d5041Cb3",
          value: Number.parseInt(uv[1]) * 10000000000000000,
        });
      let f = await web3.eth.getBalance(address);
      score_two_(f / 1000000000000000000);
      await Contract.methods.dtp_pay(i_F).send({ from: address });
      let z = await Contract.methods.Fine(i_F).call({ from: address });
      uv3_(z);
    } else alert("Ошибкой может послужить: \n 1. Недостаточно средств.");

    await web3.eth.personal.unlockAccount(
      "0x5288fF9999907DE463a302a6e3607923aC717dC8",
      "1111"
    );

    if (h == 2) {
      klick6_(1);
      let a = await Contract.methods.check(i_F).send({ from: address });
      if (a == "Скидка")
        await web3.eth.sendTransaction({
          from: "0x5288fF9999907DE463a302a6e3607923aC717dC8",
          to: "0xc5f1731B0efF9aD42D60F2c8C34F51f6d5041Cb3",
          value: (uv[1] * 10000000000000000) / 2,
        });
      if (a == "Без скидки")
        await web3.eth.sendTransaction({
          from: "0x5288fF9999907DE463a302a6e3607923aC717dC8",
          to: "0xc5f1731B0efF9aD42D60F2c8C34F51f6d5041Cb3",
          value: uv[1] * 10000000000000000,
        });

      await Contract.methods.dtp_pay(i_F).send({ from: address });
      let z = await Contract.methods.Fine(i_F).call({ from: address });
      uv3_(z);
    }
    klick5_(0);
    klick6_(0);
  }

  async function Answer_Request_loan(a) {
    if (a == 1) {
      klick11_(1);
      await web3.eth.sendTransaction({
        from: "0x3aD17EF0b0c3f461E7544c07C2de4b256C5e6b55",
        to: "0x5288fF9999907DE463a302a6e3607923aC717dC8",
        value: (mess[0] * 1000000000000000000) / 2,
      });
      let f = await web3.eth.getBalance(address);
      score_two_(f / 1000000000000000000);
      await Contract.methods
        .Answer_Request_loan(number2, a)
        .send({ from: address });
      let m = await Contract.methods.Viewing_REQEST(number2).call();
      mess_(m);
    }
    if (a == 2) {
      klick12_(1);
      await Contract.methods
        .Answer_Request_loan(number2, a)
        .send({ from: address });
    }

    klick11_(0);
    klick12_(0);
  }

  return (
    <>
      <header className="navbar_two">
        {role == 1 && (
          <select className="text" onChange={list}>
            <option value="" hidden>
              ОПЦИИ
            </option>
            {mas.map((arr, i) => (
              <option key={i} value={String(arr)}>
                {arr}
              </option>
            ))}
          </select>
        )}
        {role == 2 && (
          <select className="text" onChange={list}>
            <option value="" hidden>
              ОПЦИИ
            </option>
            {mas2.map((arr, i) => (
              <option key={i} value={String(arr)}>
                {arr}
              </option>
            ))}
          </select>
        )}
        {role == 3 && (
          <select className="text" onChange={list}>
            <option value="" hidden>
              ОПЦИИ
            </option>
            {mas3.map((arr, i) => (
              <option key={i} value={String(arr)}>
                {arr}
              </option>
            ))}
          </select>
        )}
        {role == 4 && (
          <select className="text" onChange={list}>
            <option value="" hidden>
              ОПЦИИ
            </option>
            {mas4.map((arr, i) => (
              <option key={i} value={String(arr)}>
                {arr}
              </option>
            ))}
          </select>
        )}
        <div>
          <Link to="./Page_1">
            <button className="text">ВЫХОД</button>
          </Link>
        </div>
      </header>

      <br />

      <div style={{ float: "left", marginLeft: "40px" }}>
        <div className="message_two5">
          <br />
          <div style={{ fontSize: "45px", fontWeight: "bolder" }}>
            {role == 1 && <center>ЛИЧНЫЙ КАБИНЕТ СОТРУДНИКА ДПС</center>}
            {role == 2 && <center>ЛИЧНЫЙ КАБИНЕТ ПОЛЬЗОВАТЕЛЯ</center>}
            {role == 3 && <center>СТРАХОВАЯ КОМПАНИЯ</center>}
            {role == 4 && <center>БАНК</center>}
          </div>
          <br />
          <div style={{ marginLeft: "20px" }}>
            {role == 1 && (
              <div>
                {FIO}
                <br />
                Стаж: {expertise}
                <br />
              </div>
            )}
            {role == 2 && (
              <div>
                {FIO}
                <br />
                Стаж: {expertise}
                <br />
              </div>
            )}
            Баланс:&nbsp;{Math.round(parseFloat(score_two) * 100) / 100}
          </div>
          <br />
        </div>

        <br />
        {_1 == 1 && (
          <div className="message_two5">
            <div style={{ float: "right" }}>
              <button className="text_two" onClick={() => exit("_1_")}>
                &#10006;
              </button>
            </div>
            <br />
            <br />
            <center>
              {number == "" && (
                <Link to="./Page_4">
                  <li className="buttons">
                    Заполить водительское удостоверение
                  </li>
                </Link>
              )}
              &nbsp;
              {category != "" && klick8 == 0 && (
                <button className="button" onClick={() => Request_extension()}>
                  ПРОДЛИТЬ
                </button>
              )}
              {category != "" && klick8 == 1 && (
                <button className="buttonn">ПРОДЛИТЬ</button>
              )}
              <br />
            </center>
            {category != "" && (
              <div style={{ marginLeft: "20px" }}>
                <br />
                Номер: {number}
                <br />
                {data}
                <br />
                {category}
              </div>
            )}
            <br />
          </div>
        )}

        {_1 == 1 && <br />}
        {_3 == 1 && (
          <div className="message_two5">
            <div style={{ float: "right" }}>
              <button className="text_two" onClick={() => exit("_3_")}>
                &#10006;
              </button>
            </div>
            <br />
            <br />
            {category != "" && (
              <center>
                <Link to="./Page_5">
                  <li className="buttons">Регистрация транспорта</li>
                </Link>
              </center>
            )}
            {category == "" && (
              <center>ЗАПОЛНИТЕ ДАННЫЕ ВОДИТЕЛЬСКОГО УДОСТОВЕРЕНИЯ</center>
            )}
            {Length_T > 0 && (
              <div>
                <br />
                <div style={{ float: "right" }}>
                  {i_t < Length_T && (
                    <button className="text_two" onClick={() => Transport("+")}>
                      &#9650;
                    </button>
                  )}
                  {i_t == Length_T && (
                    <button className="text_three">&#9650;</button>
                  )}
                  <br />
                  {i_t > 1 && (
                    <button className="text_two" onClick={() => Transport("-")}>
                      &#9660;
                    </button>
                  )}
                  {i_t == 1 && <button className="text_three">&#9660;</button>}
                  <br />
                </div>
                <div style={{ marginLeft: "20px", marginRight: "40px" }}>
                  Вин: {name}
                  <br />
                  {category2}
                  <br />
                  Стоимость: {price}
                  <br />
                  Срок: {srok}
                  {price3 != 0 && <div>Страховка: {price3 / 100}</div>}
                  {price3 == 0 && <br />}
                  <br />
                  <div>
                    ВСЕГО: {Length_T}
                    <div style={{ float: "right" }}>{i_t}</div>
                  </div>
                </div>
                {price3 == 0 && (
                  <div>
                    <br />
                    <center>
                      <button
                        className="buttons"
                        onClick={() => shtraf(number)}
                      >
                        Оформить страховку
                      </button>
                    </center>
                    {nums3 != "" && (
                      <div style={{ marginLeft: "20px", marginRight: "40px" }}>
                        <br />
                        Страховой взнос: {nums3}
                        <br />
                        Страховка: {nums3 * 10}
                        <br />
                        ДТП: {col} &nbsp; Штраф: {col2}
                        <br />
                        <br />
                      </div>
                    )}
                  </div>
                )}
                {nums3 != "" && (
                  <center>
                    {klick2 == 0 && (
                      <button className="button" onClick={strahovka_vznos}>
                        ОФОРМИТЬ
                      </button>
                    )}
                    {klick2 == 1 && (
                      <button className="buttonn">ОФОРМИТЬ</button>
                    )}
                  </center>
                )}
              </div>
            )}
            <br />
          </div>
        )}
      </div>

      <div style={{ float: "right", marginRight: "40px" }}>
        {_5 == 1 && (
          <div className="message_two5">
            <button
              style={{ float: "right" }}
              className="text_two"
              onClick={() => exit("_5_")}
            >
              &#10006;
            </button>

            <div style={{ marginRight: "20px", marginLeft: "140px" }}>
              <br />
              <input
                className="input"
                type="number"
                min="000"
                max="999"
                placeholder="НОМЕР"
                value={nume}
                onChange={(e) => nume_(e.target.value)}
              />
              <br />
              <br />
              <input
                className="input"
                type="number"
                placeholder="ВИН"
                value={sname}
                onChange={(e) => sname_(e.target.value)}
              />
              <br />
              <br />
              <textarea
                className="input3"
                placeholder="КОММЕНТАРИИ"
                value={te}
                onChange={(e) => te_(e.target.value)}
              />
              <br />
              <br />
              ДТП
              <input
                className="inputs"
                type="radio"
                name="radio"
                onChange={() => changeHandler("1")}
              />
              &nbsp; ШТРАФ
              <input
                className="inputs"
                type="radio"
                name="radio"
                onChange={() => changeHandler("2")}
              />
              {DTP_FINE == 1 && (
                <div>
                  <br />
                  <input
                    className="input"
                    type="number"
                    min="0"
                    placeholder="СТОИМОСТЬ"
                    value={pr}
                    onChange={(e) => pr_(e.target.value)}
                  />
                </div>
              )}
              {DTP_FINE != 1 && <br />}
              {DTP_FINE == 1 && (
                <div>
                  <br />
                  <input
                    className="input"
                    type="text"
                    placeholder="ВИНОВНИК"
                    value={vin}
                    onChange={(e) => vin_(e.target.value)}
                  />
                </div>
              )}
              <br />
              {klick == 0 && (
                <button
                  style={{ marginLeft: "40px" }}
                  className="button"
                  onClick={Issuing_a_fine}
                >
                  ОФОРМИТЬ
                </button>
              )}
              {klick == 1 && (
                <button style={{ marginLeft: "40px" }} className="buttonn">
                  ОФОРМИТЬ
                </button>
              )}
              <br />
            </div>
            <br />
          </div>
        )}
        {_5 == 1 && <br />}
        {_2 == 1 && (
          <div className="message_two5">
            <div style={{ float: "right" }}>
              <button className="text_two" onClick={() => exit("_2_")}>
                &#10006;
              </button>
              <br />
              <br />
              {Length_C > 0 && (
                <div>
                  {i_C < Length_C && (
                    <button
                      className="text_two"
                      onClick={() => Messages_CLIENT("+")}
                    >
                      &#9650;
                    </button>
                  )}
                  {i_C == Length_C && (
                    <button className="text_three">&#9650;</button>
                  )}
                  <br />
                  {i_C > 1 && (
                    <button
                      className="text_two"
                      onClick={() => Messages_CLIENT("-")}
                    >
                      &#9660;
                    </button>
                  )}
                  {i_C == 1 && <button className="text_three">&#9660;</button>}
                  <br />
                </div>
              )}
            </div>
            <br />
            {Length_C > 0 && (
              <div style={{ marginRight: "20px", marginLeft: "20px" }}>
                {text}
                <br />
                <br />
                {hour}
                <br />
                {date}
                <br />
                <br />
                <div>
                  ВСЕГО: {Length_C}
                  <div style={{ float: "right", marginRight: "30px" }}>
                    {i_C}
                  </div>
                </div>
                <br />
              </div>
            )}
            {Length_C == 0 && (
              <center>
                СПИСОК СООБЩЕНИЙ ПУСТ
                <br />
                <br />
              </center>
            )}
          </div>
        )}
        {_2 == 1 && <br />}
        {_9 == 1 && (
          <div className="message_two5">
            <div style={{ float: "right" }}>
              <button className="text_two" onClick={() => exit("_9_")}>
                &#10006;
              </button>
              <br />
              <br />
              {Length_S > 0 && (
                <div>
                  {is < Length_S && (
                    <button className="text_two" onClick={() => Y_N("+")}>
                      &#9650;
                    </button>
                  )}
                  {is == Length_S && (
                    <button className="text_three">&#9650;</button>
                  )}
                  <br />
                  {is > 1 && (
                    <button className="text_two" onClick={() => Y_N("-")}>
                      &#9660;
                    </button>
                  )}
                  {is == 1 && <button className="text_three">&#9660;</button>}
                  <br />
                </div>
              )}
            </div>
            <br />
            {Length_S > 0 && (
              <div style={{ marginRight: "20px", marginLeft: "20px" }}>
                Вин: {fir[2]}
                <br />
                Взнос: {fir[1] / 100}
                <br />
                <br />
                {date5}
                <br />
                {hour5}
                <br />
                {fir[4] == "Ожидает ответа" && (
                  <div style={{ color: "#CE3434" }}>{fir[4]}</div>
                )}
                {fir[4] == "Ответ отправлен" && (
                  <div style={{ color: "#05A54B" }}>{fir[4]}</div>
                )}
                <br />
                <div>
                  ВСЕГО: {Length_S}
                  <div style={{ float: "right", marginRight: "30px" }}>
                    {is}
                  </div>
                </div>
                <br />
                {fir[4] == "Ожидает ответа" && (
                  <div>
                    {klick3 == 0 && (
                      <button className="button" onClick={() => Answer(1)}>
                        ПОДТВЕРДИТЬ
                      </button>
                    )}
                    {klick3 == 1 && (
                      <button className="buttonn">ПОДТВЕРДИТЬ</button>
                    )}
                    <div style={{ float: "right" }}>
                      {klick4 == 0 && (
                        <button className="button" onClick={() => Answer(2)}>
                          ОТКЛОНТЬ
                        </button>
                      )}
                      {klick4 == 1 && (
                        <button className="buttonn">ОТКЛОНТЬ</button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {Length_S == 0 && (
              <center>
                СПИСОК ЗАПРОСОВ ПУСТ
                <br />
                <br />
              </center>
            )}
          </div>
        )}

        {_2 == 1 && <br />}
        {_4 == 1 && (
          <div className="message_two5">
            <div style={{ float: "right" }}>
              <button className="text_two" onClick={() => exit("_4_")}>
                &#10006;
              </button>
              <br />
              <br />
              {Length_D > 0 && (
                <div>
                  {i_Z < Length_D && (
                    <button
                      className="text_two"
                      onClick={() => Messages_DPS("+")}
                    >
                      &#9650;
                    </button>
                  )}
                  {i_Z == Length_D && (
                    <button className="text_three">&#9650;</button>
                  )}
                  <br />
                  {i_Z > 1 && (
                    <button
                      className="text_two"
                      onClick={() => Messages_DPS("-")}
                    >
                      &#9660;
                    </button>
                  )}
                  {i_Z == 1 && <button className="text_three">&#9660;</button>}
                  <br />
                </div>
              )}
            </div>
            <br />
            {Length_D > 0 && (
              <div>
                <div style={{ marginRight: "20px", marginLeft: "20px" }}>
                  {number2}
                  <br />
                  {data2}
                  <br />
                  <br />
                  {hour2}
                  <br />
                  {date2}
                  {status == "Ожидает ответа" && (
                    <div style={{ color: "#CE3434" }}>{status}</div>
                  )}
                  {status == "Ответ отправлен" && (
                    <div style={{ color: "#05A54B" }}>{status}</div>
                  )}
                  <br />
                  <div>
                    ВСЕГО: {Length_D}
                    <div style={{ float: "right", marginRight: "30px" }}>
                      {i_Z}
                    </div>
                  </div>
                  <br />
                </div>
                {status == "Ожидает ответа" && (
                  <center>
                    {klick9 == 0 && (
                      <button className="button" onClick={() => Y()}>
                        ПОДТВЕРДИТЬ
                      </button>
                    )}
                    {klick9 == 1 && (
                      <button className="buttonn">ПОДТВЕРДИТЬ</button>
                    )}
                    &nbsp;
                    {klick10 == 0 && (
                      <button className="button" onClick={() => N()}>
                        ОТКЛОНИТЬ
                      </button>
                    )}
                    {klick10 == 1 && (
                      <button className="buttonn">ОТКЛОНИТЬ</button>
                    )}
                  </center>
                )}
              </div>
            )}
            {Length_D == 0 && (
              <center>
                СПИСОК ЗАПРОСОВ ПУСТ
                <br />
                <br />
              </center>
            )}
          </div>
        )}

        {_4 == 1 && <br />}
        {_6 == 1 && (
          <div className="message_two5">
            <div style={{ float: "right" }}>
              <button className="text_two" onClick={() => exit("_6_")}>
                &#10006;
              </button>
              <br />
              <br />
              {Length_F > 0 && (
                <div>
                  {i_F < Length_F && (
                    <button className="text_two" onClick={() => Fine("+")}>
                      &#9650;
                    </button>
                  )}
                  {i_F == Length_F && (
                    <button className="text_three">&#9650;</button>
                  )}
                  <br />
                  {i_F > 1 && (
                    <button className="text_two" onClick={() => Fine("-")}>
                      &#9660;
                    </button>
                  )}
                  {i_F == 1 && <button className="text_three">&#9660;</button>}
                  <br />
                </div>
              )}
            </div>
            {Length_F > 0 && (
              <div style={{ marginRight: "20px", marginLeft: "20px" }}>
                <br />
                {number}
                <br />
                ВИН: {uv[6]}
                <br />
                {uv[0]}
                <br />
                {uv[3] == 1 && <div>Удостоверение виновника ДТП: {uv[5]}</div>}
                {uv[3] == 1 && <div>Стоимость ущерба в ДТП: {uv[1]}</div>}
                {uv[3] == 2 && <div>Стоимость штрафа: {uv[1]}</div>}
                <br />
                {hour3}
                <br />
                {date3}
                <br />
                {uv[4] == "Ожидает оплаты" && (
                  <div style={{ color: "#CE3434" }}>{uv[4]}</div>
                )}
                {uv[4] == "Оплачено" && (
                  <div style={{ color: "#05A54B" }}>{uv[4]}</div>
                )}
                <br />
                <div>
                  ВСЕГО: {Length_F}
                  <div style={{ float: "right", marginRight: "30px" }}>
                    {i_F}
                  </div>
                </div>
                <br />
                {uv[4] != "Ожидает оплаты" && <br />}
                {uv[4] == "Ожидает оплаты" && (
                  <div>
                    <center>
                      {klick5 == 0 && (
                        <button className="button" onClick={() => dtp_pay(1)}>
                          ОПЛАТИТЬ
                        </button>
                      )}
                      {klick5 == 1 && (
                        <button className="buttonn">ОПЛАТИТЬ</button>
                      )}
                      &nbsp;
                      {str != 0 &&
                        uv[3] == 1 &&
                        uv[5] == number &&
                        klick6 == 0 && (
                          <button className="button" onClick={() => dtp_pay(2)}>
                            СТРАХОВКА
                          </button>
                        )}
                      {str != 0 &&
                        uv[3] == 1 &&
                        uv[5] == number &&
                        klick6 == 1 && (
                          <button className="buttonn">СТРАХОВКА</button>
                        )}
                    </center>
                  </div>
                )}
              </div>
            )}
            {Length_F == 0 && (
              <center>
                <br />
                СПИСОК УВЕДОМЛЕНИЙ ПУСТ
                <br />
                <br />
              </center>
            )}
          </div>
        )}
        {_10 == 1 && <br />}
        {_10 == 1 && (
          <div className="message_two5">
            <div style={{ float: "right" }}>
              <button className="text_two" onClick={() => exit("_10_")}>
                &#10006;
              </button>
              <br />
              <br />
            </div>
            {count2 != 1 && (
              <div style={{ marginLeft: "80px" }}>
                <br />
                <input
                  className="input"
                  type="number"
                  placeholder="СУММА"
                  value={sumh}
                  onChange={(e) => sumh_(e.target.value)}
                ></input>
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;
                {klick7 == 0 && (
                  <button className="button" onClick={Loan_from_a_bank}>
                    ОТПРАВИТЬ
                  </button>
                )}
                {klick7 == 1 && <button className="buttonn">ОТПРАВИТЬ</button>}
                <br />
                <br />
              </div>
            )}
            {count2 == 1 && (
              <center style={{ marginLeft: "20px" }}>
                <br />
                ВЫ НЕ МОЖЕТЕ ПОВТОРНО ОФОРМИТЬ КРЕДИТ
                <br />
                <br />
              </center>
            )}
          </div>
        )}

        {_11 == 1 && <br />}
        {_11 == 1 && (
          <div className="message_two5">
            <div style={{ float: "right" }}>
              <button className="text_two" onClick={() => exit("_11_")}>
                &#10006;
              </button>
              <br />
              {count3 != 0 && (
                <div>
                  <br />
                  {number2 < count3 && (
                    <button
                      className="text_two"
                      onClick={() => Viewing_MESSAGES("+2")}
                    >
                      &#9650;
                    </button>
                  )}
                  {number2 == count3 && (
                    <button className="text_three">&#9650;</button>
                  )}
                  <br />
                  {number2 > 1 && (
                    <button
                      className="text_two"
                      onClick={() => Viewing_MESSAGES("-2")}
                    >
                      &#9660;
                    </button>
                  )}
                  {number2 == 1 && (
                    <button className="text_three">&#9660;</button>
                  )}
                  <br />
                </div>
              )}
              <br />
            </div>
            {count3 == 0 && (
              <div>
                <br />
                <center style={{ marginLeft: "20px" }}>
                  СПИСОК ЗАПРОСОВ НА КРЕДИТ ПУСТ
                  <br />
                  <br />
                </center>
              </div>
            )}
            {count3 != 0 && (
              <div style={{ marginLeft: "20px" }}>
                <br />
                &nbsp;Сумма:&nbsp;{mess[0]}
                <br />
                <br />
                {mess[3] == "Ожидает ответа" && (
                  <div style={{ color: "#CE3434" }}>{mess[3]}</div>
                )}
                {mess[3] == "Ответ отправлен" && (
                  <div style={{ color: "#05A54B" }}>{mess[3]}</div>
                )}
                &nbsp;{time}
                <br />
                &nbsp;{hours}
                <br />
                <br />
                <div>
                  ВСЕГО: {count3}
                  <div style={{ float: "right", marginRight: "30px" }}>
                    {number2}
                  </div>
                </div>
                <br />
              </div>
            )}
            {mess[3] == "Ожидает ответа" && (
              <center>
                {klick11 == 0 && (
                  <button
                    className="button"
                    onClick={() => Answer_Request_loan(1)}
                  >
                    ПОДТВЕРДИТЬ
                  </button>
                )}
                {klick11 == 1 && (
                  <button className="buttonn">ПОДТВЕРДИТЬ</button>
                )}
                &nbsp;
                {klick12 == 0 && (
                  <button
                    className="button"
                    onClick={() => Answer_Request_loan(2)}
                  >
                    ОТКЛОНИТЬ
                  </button>
                )}
                {klick12 == 1 && <button className="buttonn">ОТКЛОНИТЬ</button>}
              </center>
            )}
          </div>
        )}
      </div>
      <br />
      <br />
    </>
  );
};
export default Page_2;
