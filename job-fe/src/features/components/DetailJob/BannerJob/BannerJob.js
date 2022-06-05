import React from 'react'
import "../../../scss/DetailJob/BannerJob.scss"
export default function BannerJob(props) {

    return (
        <div className="bannerJob">
            <div className="container" style={{
                background: `url(${props.banner}) repeat center`,
                backgroundSize: 'cover'
            }}>
                <div className="bannerJob__content">
                    <div className="bannerJob__content__logo">
                        <img src={props.avatar} alt="" />
                    </div>
                    <div className="bannerJob__content__title">
                        <div className="title--top">Mời bạn đến với công ty</div>
                        <div className="title--bot">{props.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
