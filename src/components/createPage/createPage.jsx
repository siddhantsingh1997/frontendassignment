import react, { useState, useEffect } from "react";
import "./createPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const addProductValues = {
    name: "",
    description: "",
    price: 0,
    rating: 0
};

export default function Createpage() {

    const [productvalues, setproductValues] = useState(addProductValues);

    const navigate = useNavigate();


    const onInputChange = (e) => {
        setproductValues({ ...productvalues, [e.target.name]: e.target.value });

    };

    const onSubmit = () => {
        axios.post(`http://ec2-44-202-87-198.compute-1.amazonaws.com:6565/api/v1/product/new`, productvalues, {}).then(function (response) {

            console.log("response", response);

        })
            .catch(function (error) {
                // handle error

                console.log("response", error);
            })

    }



    return (
        <>
            <div className="form-wrapper">
                <form >
                    <label for="fname">Product Name</label>
                    <input type="text" id="fname" name="name" placeholder="Your product.." onChange={(e) => {
                        onInputChange(e);
                    }} />

                    <label for="lname">Description</label>
                    <input type="text" id="lname" name="description" placeholder="Enter Description.." onChange={(e) => {
                        onInputChange(e);
                    }} />

                    <label for="lname">Price</label>
                    <input type="text" id="lname" name="price" placeholder="Enter Price here" onChange={(e) => {
                        onInputChange(e);
                    }} />

                    <label for="lname">rating</label>
                    <input type="text" id="lname" name="rating" placeholder="Enter rating here" onChange={(e) => {
                        onInputChange(e);
                    }} />

                    <div onClick={() => {
                        onSubmit();
                    }} className="submit-button">
                        Submit
                    </div>
                </form>
            </div>
            <div className="divider"></div>
            <div className="go-back" onClick={() => { navigate("/"); }}>Go Back</div>
        </>
    )
}
