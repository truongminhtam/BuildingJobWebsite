import { message } from "antd";
import axiosClient from "./axiosClient";
import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/storage';     
import 'firebase/database';    
import 'firebase/firestore';   
import 'firebase/messaging';   
import 'firebase/functions'; 

class UserApi {
    getAll = (params) => {
        const url = '/users';
        return axiosClient.get(url, { params });
    };
    getAllId = (params) => {
        const url = '/userId';
        return axiosClient.get(url, { params });
    };
    getOne = (params) => {
        const url = `/users/${params}`;
        return axiosClient.get(url).then(data => {
            return data.data
        });
    };
    getUserSaveWork = (params) => {
        const url = `/getUserSaveWork/${params}`;
        return axiosClient.get(url).then(data => {
            return data.data
        });
    };
    postuser = (params) => {
        const url = '/users';
        return axiosClient.post(url, params).then(data => {
            message.success("Thêm công việc thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    deleteuser = (id) => {
        const url = `/users/${id}`;
        return axiosClient.delete(url)
    };
    edituser = (params) => {
        const url = `/users/${params.id}`;
        return axiosClient.patch(url, params).then(data => {
            message.success("Sửa thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    getMe = () => {
        return new Promise((resolve, reject) => {
            const currenUser = firebase.auth().currentUser;
            resolve({
                id: currenUser.uid,
                name: currenUser.displayName,
                email: currenUser.email,
                photoUrl: currenUser.photoURL
            })
        })
    }
}
const userApi = new UserApi();
export default userApi;


// export default useApi;