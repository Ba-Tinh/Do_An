import React, {useEffect, useState} from "react";
import axios from "axios";
import Product_detail from "../product_detail/Product_detail";
import { Container, Row } from "reactstrap";


export default function Product() {
    const [data, setData] = useState([]);
    const url = "https://65980bfb668d248edf23ffb0.mockapi.io/hocsinh";
    useEffect(()=>{
        axios.get(url).then(function (res){
            setData(res.data);
        });
    }, []);
    return <div>
        <Container>
            <Row>
                {data.map((item, index) => (
                    <Product_detail key={index} product={item} />
                ))}
            </Row>
        </Container>
    </div>;
}