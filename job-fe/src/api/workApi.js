import { message } from "antd";
import axiosClient from "./axiosClient";

class WorkApi {
    getAll = (params) => {
        const url = '/works';
        return axiosClient.get(url, { params });
    };
    search = (params) => {
        const url = '/searchWorks';
        return axiosClient.get(url, { params });
    };
    getAllId = (params) => {
        const url = '/workId';
        return axiosClient.get(url, { params });
    };
    getOne = async (params) => {
        const url = `/works/${params}`;
        const data = await axiosClient.get(url);
        return data.data;
    };
    postwork = async (params) => {
        const url = '/works';
        try {
            const data = await axiosClient.post(url, params);
            message.success("Thêm công việc thành công!");
        } catch (err) {
            message.error("Có lỗi xảy ra!");
        }
    };
    deletework = (id) => {
        const url = `/works/${id}`;
        return axiosClient.delete(url)
    };
    editwork = async (params) => {
        const url = `/works/${params.id}`;
        try {
            const data = await axiosClient.patch(url, params);
            message.success("Sửa thành công!");
        } catch (err) {
            message.error("Có lỗi xảy ra!");
        }
    }
}
const workApi = new WorkApi();
export default workApi;