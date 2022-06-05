import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Popconfirm, Rate, Spin, Table } from "antd";
import {
    binhluanData,
    removebinhluan,
    updatebinhluan
} from "../Slice/binhluanSlice";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import "./binhluan.css";
function Binhluan() {
  const match = useRouteMatch();
  console.log(match.url);
  const columns = [
    {
      title: "Người dùng",
      dataIndex: "user",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Bình luận",
      dataIndex: "binhluan",
    },
    {
      title: "Điểm",
      dataIndex: "star",
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const binhluans = useSelector((state) => state.binhluans.binhluan.data);
  const loading = useSelector((state) => state.binhluans.loading);
  console.log(loading)
  const dispatch = useDispatch();
  const [state, setState] = useState({
    page: localStorage.getItem("pageCheckCompany") || 1,
  });
  const { page } = state;
  const actionResult = async (page) => {
    await dispatch(binhluanData(page));
  };
  var binhluan = [];
  if (binhluans) {
    for (let i = 0; i < binhluans.length; i++) {
      if (binhluans[i].binhluan.length === 0) {
        binhluan.push(binhluans[i]);
      } else {
        binhluan.unshift(binhluans[i]);
      }
    }
  }
  useEffect(() => {
    localStorage.setItem("pagecheckCompany", page);
    actionResult({ page: page });
  }, [page]);
  const history = useHistory();
  const hangdleDelete = (e) => {
    dispatch(removebinhluan(e));
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  const hangdleInfor = (id) => {
    history.push(`${match.url}/chitietbinhluan/${id}`);
  };
  const handleStatus = (e, id) => {
    if (e === 1) {
      dispatch(updatebinhluan({ status: 0, idsua: id }));
    } else {
      dispatch(updatebinhluan({ status: 1, idsua: id }));
    }
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  return (
    <div id="admin">
      <div className="heading">
          <div className="heading__title">
                <h3>Bình luận</h3>
          </div>
        <div className="heading__hr"></div>
      </div>
      <div className="content">
        {loading ? 
          <div className="spin">
            <Spin className="mt-5" />
          </div>
         : (
            <div>
                <Table
                    columns={columns}
                    dataSource={binhluan.map((ok, index) => ({
                    key: index + 1,
                    user: ok.User.name,
                    company: ok.Company.name,
                    binhluan: (
                        <p className="text-justify">
                        <b>{ok.binhluan}</b>
                        </p>
                    ),
                    star: (
                        <div className="size-binhluan">
                        <Rate className="rate-binhluan" value={ok.star} disabled />
                        </div>
                    ),
                    status: (
                        <div className="action">
                        {ok.status === 1 ? (
                            <span
                            onClick={() => {
                                handleStatus(ok.status, ok.id);
                            }}
                            >
                            <i className="far fa-thumbs-up text-primary"></i>
                            </span>
                        ) : (
                            <span onClick={() => handleStatus(ok.status, ok.id)}>
                            <i className="far fa-thumbs-down "></i>
                            </span>
                        )}
                        </div>
                    ),
                    
                    action: (
                        <div className="action">
                        
                        <Popconfirm
                            title="Bạn có muốn xoá？"
                            onConfirm={() => {
                            hangdleDelete(ok.id);
                            }}
                            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                        >
                            <i className="far fa-trash-alt"></i>
                        </Popconfirm>
                        </div>
                    ),
                    }))}
                />
          </div>
        )}
      </div>
    </div>
  );
}

Binhluan.propTypes = {};

export default Binhluan;
