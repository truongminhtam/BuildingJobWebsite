import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { contactData } from "../../../admin/Slice/contactSlice";
import { socialNetworkData } from "../../../admin/Slice/socialNetworkSlice";
import "../../../scss/Home/Footer.scss";
import SpinLoad from "../../Spin/Spin";
export default function Footer() {
  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contacts.contact.data);
  const loadingContact = useSelector((state) => state.contacts.loading);
  const ok = !loadingContact ? contact.rows[0] : [];
  const actionResult = async () => {
    dispatch(contactData({ status: 1 }));
  };
  const actionResultMxh = async () => {
    dispatch(socialNetworkData({ status: 1 }));
  };
  const mxh = useSelector((state) => state.socialNetworks.socialNetwork.data);
  const loadMxh = useSelector((state) => state.socialNetworks.loading);
  useEffect(() => {
    actionResult();
    actionResultMxh();
  }, []);
  const chuyentrang = (url) => {
    window.open(url);
  };
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="footer__box">
              <div className="footer__title">
                <h3>Giới thiệu</h3>
              </div>
              <div className="footer__content">
                <div className="about">
                  <span>{ok.description}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer__box">
              <div className="footer__title">
                <h3>Liên lạc với chúng tôi</h3>
              </div>
              <div className="footer__content">
                <div className="footer__content--location">
                  <div className="location--title text-white">Địa chỉ :</div>
                  <div className="location--content">{ok.address}</div>
                </div>
                <div className="footer__content--contact">
                  <div className="contact--title text-white pt-3">
                    Liên hệ :
                  </div>
                  <div className="contact--content">
                    <span>Điện thoại: {ok.phone}</span>
                    <br />
                    <span>Email: {ok.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer__box">
              <div className="footer__title">
                <h3>Đường dẫn nhanh</h3>
              </div>
              <div className="footer__content">
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <Link to="">Lập trình web</Link>
                      </li>
                      <li>
                        <Link to="">Thiết kế đồ hoạ</Link>
                      </li>
                      <li>
                        <Link to="">Trí tuệ nhân tạo</Link>
                      </li>
                      <li>
                        <Link to="">Mạng máy tính</Link>
                      </li>
                      <li>
                        <Link to="">Cơ sở dữ liệu</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <Link to="">JavaScript</Link>
                      </li>
                      <li>
                        <Link to="">Python</Link>
                      </li>
                      <li>
                        <Link to="">Java</Link>
                      </li>
                      <li>
                        <Link to="">.NET</Link>
                      </li>
                      <li>
                        <Link to="">HTML, CSS</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer__box">
              <div className="footer__title">
                <h3>Mạng xã hội</h3>
              </div>
              <div className="footer__content">
                {loadMxh ? (
                  <SpinLoad />
                ) : (
                  mxh.rows.map((ok) => (
                    <div
                      key={ok.id}
                      title={ok.name}
                      onClick={() => chuyentrang(ok.link)}
                    >
                      <div
                        className="icon_footer"
                        style={{
                          background: `${ok.color}`,
                          cursor: "pointer",
                        }}
                      >
                        <i className={`${ok.icon}`}></i>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
