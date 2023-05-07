import ConceptModel from "./ConceptModel";
import GalleryModel from "./GalleryModel";
import ReviewModel from "./ReviewModel";

class DataModel {
    public concepts: ConceptModel[];
    public reviews: {images:string[],reviews:ReviewModel[]};
    public gallery: GalleryModel;

}

export default DataModel;