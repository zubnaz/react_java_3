import axios from "axios";
import { useForm } from "react-hook-form"
import { edit_url } from "../../dataUrl";
import { useNavigate, useParams } from "react-router-dom";
import "./editPage.css";
export default function EditPage(){

    const{id}=useParams();
    const{ register,handleSubmit}=useForm();
    const navigate = useNavigate();

    const edit = async(obj)=>{
        console.log(obj)
        const editCategory={
            id:id,
            name:obj.name,
            image:obj.image,
            description:obj.description
        }
        console.log(editCategory)
        await axios.put(edit_url,editCategory,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        await exit();
    }
    const exit = async()=>{
        navigate(-1);
    }
    return(<div>
        <form onSubmit={handleSubmit(edit)}>
        <input {...register("name")} placeholder="Name"></input>
            <input {...register("description")} placeholder="Description"></input>
            <input {...register("image")} placeholder="Image (URL)"></input>
            <div className="buttons">
            <button type="submit">Оновити</button>
            <button type="button" onClick={()=>{navigate(-1)}}>Назад</button>
            </div>
        </form>
    </div>)
}