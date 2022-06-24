import react, { useState, useEffect } from "react";
import "./home.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
export default function Home() {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const { data, loading, error } = useFetch(`http://ec2-44-202-87-198.compute-1.amazonaws.com:6565/api/v1/products?keyword=${search}`)

    return (
        <>
            <div className="search-wrapper">
                <input type="search" placeholder="Search" onChange={(e) => { setSearch(e.target.value) }} />
                <div className="create-products" onClick={() => { navigate("./createpage"); }}>Create Products</div>
            </div >
            {
                data !== null ?

                    <div className="card-wrapper">
                        {
                            data.products.map((item, index) => {

                                return (
                                    <div class="card" style={{ marginTop: "5%" }}>
                                        <div class="container">
                                            <h4><b>{item.name}</b></h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>

                                )

                            })
                        }
                    </div> : ""
            }

        </>
    )

}