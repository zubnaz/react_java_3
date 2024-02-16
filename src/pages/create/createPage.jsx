import { useForm } from "react-hook-form";
import "./createPage.css";
import axios from "axios";
import { create_url } from "../../dataUrl";
import { Navigate, useNavigate } from "react-router-dom";
export default function CreatePage(){
    const {register,handleSubmit}=useForm();
    const navigate = useNavigate();
    const create = async (obj)=>{
        const newCategory={
            name:obj.name,
            image:obj.image,
            description:obj.description
        }
        if(newCategory.name==""||newCategory.image==""||newCategory.description==""){
        alert("Заповінть всі форми!");
        return;
        }
        await axios.post(create_url,newCategory, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          await exit();
    }
    const exit = async()=>{
        navigate(-1);
    }
    return(<div>
        <form onSubmit={handleSubmit(create)}>
            <input {...register("name")} placeholder="Name"></input>
            <input {...register("description")} placeholder="Description"></input>
            <input {...register("image")} placeholder="Image (URL)"></input>
            <div className="buttons">
            <button type="submit">Створити</button>
            <button type="button" onClick={()=>{navigate(-1)}}>Назад</button>
            </div>
        </form>
    </div>)
}