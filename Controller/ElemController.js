import ElemModel from "../Model/ElemModel.js";
import ElemView from "../View/ElemVew.js";

class ElemController{
    constructor(){
        this.model = new ElemModel();
        this.view = new ElemView(this.model.message, this)
    }

    handleElemClick(){
        this.model.updateMessage();
        this.view.updateMessage(this.model.message)
    }

}

export default ElemController;
