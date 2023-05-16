import DataModel from "../Models/DataModel";
import UploadModel from "../Models/UploadModel";
import globals from "./Globals";
import notify from "./Notify";
import axios from 'axios';

class DB {

    public async getData() {
        let data: DataModel;
        await axios.get<DataModel>(globals.dataUrl)
            .then(res => {
                data = res.data
            })
            .catch(err => {
                notify.error(err);
            });


        return data;
    }


    public async postData(type: string, data: FormData) {
        await axios.post<UploadModel>(globals.dataUrl + "/" + type,data)
            .then(res=>{
                return res.data;
            })
            .catch(err=>err)
    }
    public convertToFormData(type:string,data:UploadModel):FormData{
        const form = new FormData();
        if(type==='concept'){
            form.append("title",data.title);
            form.append("description",data.description);
            for (let i=0;i<data.conceptImages.length;i++)
            {
                form.append("conceptImages",data.conceptImages.item(i));
            }
            
        }
        else if(type==='gallery'){
            form.append("videoUrl",data.videoUrl);
            form.append("galleryCat",data.galleryCat);
        }
        else if(type==='reviewCard'){
            form.append("reviewerName",data.reviewerName);
            form.append("reviewerRating",data.reviewerRating.toString());
            form.append("reviewerContent",data.reviewerContent);
            form.append("reviewPostDate",data.reviewPostDate);
        }
        else if(type==='review'){
            for (let i=0;i<data.reviewsImages.length;i++)
            {
                form.append("reviewsImages",data.reviewsImages.item(i));
            }
        }
        return form;
    }
}

export default DB;