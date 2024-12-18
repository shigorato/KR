import { AbstractComponent } from "../framework/view/abstract-component.js";

function StatisticsView(totalApplicants) {
    return `
        <div class="statistics">
            <h2>Статистика</h2>
            <div class="stats-block">
                <p>Всего абитуриентов: <span id="total-applicants">${totalApplicants}</span></p>
            </div>
        </div>
    `;
}

export default class StatisticsViewComponent extends AbstractComponent {
    constructor(totalApplicants) {
        super();
        this._totalApplicants = totalApplicants;
    }

    get template() {
        return StatisticsView(this._totalApplicants);
    }
    update(totalApplicants){
        this._totalApplicants=totalApplicants;
        this.removeElement();
        const parent = document.querySelector('.container');
        parent.querySelector('.statistics').replaceWith(this.element)
    }
}