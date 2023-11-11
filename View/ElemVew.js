import ElemController from "../Controller/ElemController.js";

class ElemView{
    constructor(message, controller){
        this.controller = controller
        this.elem = this.createElem(message);
        this.elem.addEventListener("click", () => this.controller.handleElemClick());
    }

    createElem(message){
        const divElem = document.createElement("div");
        divElem.classList.add("elem-div");

        const pElem = document.createElement("p");
        pElem.textContent = message
        divElem.appendChild(pElem);

        document.body.appendChild(divElem);

        return divElem;
    }

    updateMessage(message){
        this.elem.textContent = message
    }
}

export default ElemView