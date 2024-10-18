import { useState } from "react";
// import getDogUrl from "../api/getDogUrl";

const NewAmigo = () => {

    let [dogUrl, setDogUrl] = useState(0);

    return (
        <div className="main_tab">
            <div className="container main_tab__inner">

                <h1 className="main_tab__header">
                    <span className="main_tab__header-title">Generate New Amigo</span>
                    
                    <div className="main_tab__header-tip">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                            <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"/>
                        </svg>
                    </div>
                </h1>

                <div className="main_tab__wrapper">
                    <div className={"main_tab__img_placeholder" + (dogUrl ? "" : " --empty")}>
                        <div className="main_tab__img_placeholder-text">
                            Invite the first Amigo by clicking "Invite" button
                        </div>
                        <img src={dogUrl} className="main_tab__img_placeholder-img" />
                    </div>

                    <button className="main_tab__invite_btn" onClick={() => {
                        // setDogUrl(getDogUrl());

                        fetch("https://dog.ceo/api/breeds/image/random")
                        .then(res => {
                            return res.json();
                        })
                        .then(data => {
                            setDogUrl(data.message);
                        })
                        .catch(err => {
                            return 0;
                        });
                    }}>
                        Invite
                    </button>
                </div>

            </div>
        </div>
    );
}

export default NewAmigo;