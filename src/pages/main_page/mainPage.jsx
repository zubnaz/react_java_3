import axios from "axios";
import { useEffect, useState } from "react";
import { get_url, pathPhoto } from "../../dataUrl";
import "./mainPage.css";
import { Link } from "react-router-dom";


export default function MainPage(){

    const [data,setData]=useState([]);
    const loadData = async()=>{
        let _data = await axios.get(get_url);
        setData(_data.data);
    }

    useEffect(()=>{loadData()},[]);

    return(
        <div className="home">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Назва</th>
                        <th>Опис</th>
                        <th>Фото</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.length>0?data.map((element,index)=>
                        <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.description}</td>
                        <td><img src={pathPhoto+element.image}/></td>
                        <td className="buttons"><Link to={`edit/${element.id}`}>Редагувати</Link>
                        <Link to={`delete/${element.id}`}>Видалити</Link></td>
                        </tr>
                    ):""}
                    
                </tbody>
            </table>
        </div>
    );
}