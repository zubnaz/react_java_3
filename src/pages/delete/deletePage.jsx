import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { remove_url } from "../../dataUrl";

export default function DeletePage(){
    const {id}=useParams();
    const navigate = useNavigate();
    const deleteCategory = async()=>{
        await axios.delete(`${remove_url}/${id}`);
    }
    useEffect(()=>{const fetchData = async () => {
            await deleteCategory();
            navigate(-1);
    };
    fetchData();},[]);
    return(null)
}