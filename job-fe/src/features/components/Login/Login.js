import { Checkbox, message } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import loginApi from '../../../api/loginApi';
import "../../scss/Login/Login.scss"
import { inforData } from '../../admin/Slice/inforSlice';
export default function Login() {
    const dispatch = useDispatch();
    const actioninfor = async() => {await dispatch(inforData())}
    const schema = yup.object().shape({
        userName: yup.string().email().required(),
        password: yup.string().min(4).max(20).required(),
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const history = useHistory()
    const onSumit = async (data) => {
        await loginApi.loginCompany({ email: data.userName, password: data.password, status: 1 }).then(ok => {
            if (ok === "err") {
                loginApi.loginUser({ email: data.userName, password: data.password, status: 1 }).then(ok => {
                    if (ok === "err") {
                        message.error("Sai tên đăng nhập hoặc mật khẩu!")
                    } else {
                        localStorage.setItem("token", ok)
                        actioninfor();
                        message.success("Đăng nhập thành công!")
                        history.push('/')
                    }
                })
            } else {
                localStorage.setItem("token", ok)
                actioninfor();
                message.success("Đăng nhập thành công!")
                history.push('/')
            }
        })
    }
    return (
        <div className="login">
            <div className="login__title">
                Việc làm tốt
            </div>
            <div className="login__box">
                <div className="line__login"></div>
                <div className="login__box__left">
                    <form onSubmit={handleSubmit(onSumit)}>
                        <div className="login__box__left__title">
                            Tài khoản
                        </div>
                        <input type="text" {...register("userName")} placeholder="Email" />
                        <p className="text-danger">{errors.userName ? "Email không đúng định dạng" : ""}</p>
                        <div className="login__box__left__title">
                            Mật khẩu
                        </div>
                        <input type="password" {...register("password")} placeholder="Mật khẩu" />
                        <p className="text-danger">{errors.password ? "Mật khẩu ít nhất 4 ký tự và không quá 20 ký tự" : ""}</p>
                        <Checkbox >Nhớ mật khẩu</Checkbox>
                        <div className="login__box__left__button">
                            <input type="submit" value="Đăng nhập" />
                        </div>
                    </form>
                </div>
                <div className="login__box__right">
                    <div className="right">
                        <div className="login__box__right__text">
                            Hoặc đăng nhập với
                        </div>
                        <button className="fb">Đăng nhập với facebook</button>
                        <button className="in">Đăng nhập với Google</button>
                        <div className="login__box__right__text">
                            Chưa có tài khoản? <Link to="/register">Đăng ký</Link> ở đây
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
