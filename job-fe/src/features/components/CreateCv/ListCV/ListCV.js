import React from 'react'
import { useHistory } from 'react-router'
import "../../../scss/CreateCV/ListCV.scss"
import SpinLoad from "../../Spin/Spin"
import { Link } from "react-router-dom"
import { checkLoginUser } from '../../../container/Functionjs'
import { message } from 'antd'
import { useState } from 'react'
import { useEffect } from 'react'
import checkLoginApi from '../../../../api/checkLogin'
export default function ListCV({ data, loading }) {
    const [user, setUser] = useState();
    const history = useHistory()
    useEffect(() => {
        checkLoginApi.checkLogin().then(ok => {
            if (ok.data.user.type === "user") {
                setUser(ok.data.user.id)
            }
        })
    })
    const onClickInforCV = () => {
        if (user) {
            history.push("/inforCV");
        } else {
            message.warning("Bạn chưa đăng nhập tài khoản người dùng!")
        }
    }
    return (
        <div className="listCv">
            <div className="heading">
                <div className="heading__title">
                    <h3>Tạo Cv</h3>
                </div>
                <div className="heading__hr"></div>
            </div>
            <div className="div-btn-cv">
                <Link className="btn-infor-cv" onClick={onClickInforCV}>Điền thông tin CV</Link>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-3">
                        Tìm kiếm
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {loading ? <SpinLoad /> :
                                data.rows.map(ok => (
                                    <div className="col-md-4 d-flex" >
                                        <Link to={`/detaiFormCV/${ok.id}`}>
                                            <div className="box">
                                                <div className="box-img">
                                                    <img src={ok.avatar} alt="" />
                                                </div>
                                                <div className="box-tag">
                                                    {ok.Tags.map(oki => (
                                                        <p>{oki.name}</p>
                                                    ))}
                                                </div>
                                                <div className="box-name">
                                                    <p>{ok.name}</p>
                                                </div>
                                                <div className="box-color">
                                                    <div className="color"></div>
                                                    <div className="color"></div>
                                                    <div className="color"></div>
                                                    <div className="color"></div>
                                                    <div className="color"></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
