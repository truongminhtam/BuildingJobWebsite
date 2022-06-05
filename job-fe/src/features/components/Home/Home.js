import React from "react";
import { connect } from "react-redux";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import ListCategories from "./ListCategories/ListCategories";
import ListJobs from "./ListJobs/ListJobs";
import YkienNguoiDung from "./YKienNguoiDung/YKienNguoiDung";
import ListNew from "./New/ListNew";
import CvHome from "./CV/CvHome";
 
function Home()  {
  return (
    <div>
      <Banner />
      <ListCategories />
      <CvHome />
      <ListJobs />
      <Contact />
      <ListNew />
      <YkienNguoiDung/>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
