import { message } from "antd";
import axiosClient from "./axiosClient";

class CompanyApi {
    getAll = (params) => {
        const url = '/companys';
        return axiosClient.get(url, { params });
    };
    getOne = async (params) => {
        const url = `/companys/${params}`;
        const data = await axiosClient.get(url);
        return data.data;
    };
    getCompanySaveUser = async (params) => {
        const url = `/getCompanySaveUser/${params}`;
        const data = await axiosClient.get(url);
        return data.data;
    };
    getCheck = (params) => {
        const url = '/checkCompanys';
        return axiosClient.get(url, { params });
    }
    postcompany = async (params) => {
        const url = '/companys';
        try {
            const data = await axiosClient.post(url, params);
            return data.data;
        } catch (err) {
            message.error("Có lỗi xảy ra!");
        }
    };
    deletecompany = async (id) => {
        const url = `/companys/${id}`;
        try {
            await axiosClient.delete(url);
            message.success("Xoá thành công!");
        } catch (err) {
            message.error("Có lỗi xảy ra!");
        }
    };
    editcompany = async (params) => {
        const url = `/companys/${params.id}`;
        try {
            await axiosClient.patch(url, params);
            message.success("Sửa thành công!");
        } catch (err) {
            message.error("Có lỗi xảy ra!");
        }
    }
}
const companyApi = new CompanyApi();
export default companyApi;