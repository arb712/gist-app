import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

const Home = (props) => {
    const [posts, setPosts] = useState([])
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const URL = `https://api.github.com/gists/public`;

        setLoading(true);
        axios.get(URL)
            .then((res) => {
                const data = res.data;
                setPosts(data);
                setLoading(false)
            })
            .catch((err) => {
                if (
                    err &&
                    err.response &&
                    err.response.data &&
                    err.response.data.message
                  ) {
                    props.showError(err.response.data.message);
                  } else {
                    props.showError("Sorry can not get data from the server , try again later ... ");
                  }
            })
    },[]);
    return(
        <div>
        <Navbar/>
        <div>
            <Loader posts={posts} loading={loading}/>
        </div>
        <Footer/>
        </div>
    )
}

export default Home;