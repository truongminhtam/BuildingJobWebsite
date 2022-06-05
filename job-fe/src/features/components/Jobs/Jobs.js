import React, { useEffect, useState } from "react";
import workApi from "../../../api/workApi";
import { getQueryVariable } from "../../container/Functionjs";
import Footer from "../Home/Footer/Footer";
import ListNew from "../Home/New/ListNew";
import MenuNotHome from "../MenuNotHome/MenuNotHome";
import Breadcrumbs from "./Breadcrumb/Breadcrumb";
import Job from "./ListJobs/Job";
import Search from "./Search/Search";
export default function Jobs() {
  const [state, setState] = useState({
    name: getQueryVariable("name") || "",
    address: getQueryVariable("address") || "",
    data: "",
  });
  const { name, address, data } = state;
  const [time, setTime] = useState("0");
  const [amount, setAmount] = useState("0");
  const hangdelOnChange = (e) => {
    const { name, address } = e;
    setState({
      ...state,
      name: name,
      address: address,
    });
  };
  const onChangeTime = (e) => {
    setTime(e);
  };
  const onChangeAmount = (e) => {
    setAmount(e);
  };
  useEffect(async () => {
    await workApi
      .search({ name: name, nature: time, address: address, status: 1 })
      .then((ok) => {
        setState({
          ...state,
          data: ok.data,
        });
      });
    window.scrollTo(0, 0);
  }, [name, address, time]);
  return (
    <div>
      {/* <MenuNotHome /> */}
      <Breadcrumbs />
      <Search onchange={hangdelOnChange} />
      <Job
        searchData={name === "" && address === "" && time === "0" ? "" : data}
        onAmout={onChangeAmount}
        onTime={onChangeTime}
        time={time}
        amount={amount}
      />
      <ListNew />
      <Footer />
    </div>
  );
}
