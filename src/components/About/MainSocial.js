import React, { useState, useEffect } from "react";
import axios from "axios";
import Social from "../Social";

function MainSocial({ instagramPosts }) {
    const [data, setData] = useState([]);

    const access_token = "2078769588920146|c26f0c1d7cbdcc8d5fb6191d68880b1d";
    useEffect(() => {
        const instaPostData = instagramPosts.map((url) => url.Link);
        const fetchData = async () => {
            const asyncFunctions = instaPostData.map((src) =>
                axios(
                    `https://graph.facebook.com/v8.0/instagram_oembed?
                    url=${src}&hidecaption=true&omitscript=true&access_token=${access_token}`,
                ),
            );
            let result = await Promise.all(asyncFunctions);
            result = result.map((res, i) => {
                return { ...res.data, ...{ url: instaPostData[i] } };
            });
            setData(result);
            window.instgrm.Embeds.process();
        };

        fetchData();
    }, [instagramPosts]);

    return (
        <div className="container section fp-auto-height MainSocial fp-auto-height-responsive">
            <h1 className="instaHeader">Odwiedź nasze social media</h1>
            <Social />
            <div className="insta">
                <div className="instaFlex">
                    {data.map((insta, i) => (
                        <div key={i} className="instaWrapper">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: insta.html,
                                }}
                            ></div>
                            <a
                                href={insta.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="layer"
                            ></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainSocial;
