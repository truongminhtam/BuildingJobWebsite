import { message } from "antd";
import axiosClient from "./axiosClient";

class WorkApplyApi {
    getAll = (params) => {
        const url = '/workApplys';
        return axiosClient.get(url, { params });
    };
    getOne = async (params) => {
        const url = `/workApplys/${params}`;
        const data = await axiosClient.get(url);
        return data.data;
    };
    checkWorkApply = async (params) => {
        const url = `/checkWorkApply/${params}`;
        const data = await axiosClient.get(url);
        return data.data;
    }
    checkUserApply = async (params) => {
        const url = `/checkUserApply/${params}`;
        const data = await axiosClient.get(url);
        return data.data;
    }
    postworkApply = async (params) => {
        const url = '/workApplys';
        try {
            const data = await axiosClient.post(url, params);
            message.success("Ứng tuyển thành công!");
        } catch (err) {
            message.error("Có lỗi xảy ra!");
        }
    };
    deleteworkApply = async (id) => {
        const url = `/workApplys/${id}`;
        try {
            const data = await axiosClient.delete(url);
            message.success("Xoá thành công!");
        } catch (err) {
            message.error("Có lỗi xảy ra!");
        }
    };
    editworkApply = async (params) => {
        const url = `/workApplys/${params.id}`;
        try {
            const data = await axiosClient.patch(url, params);
            message.success("Sửa thành công!");
        } catch (err) {
            message.error("Có lỗi xảy ra!");
        }
    }
}
const workApplyApi = new WorkApplyApi();
export default workApplyApi;