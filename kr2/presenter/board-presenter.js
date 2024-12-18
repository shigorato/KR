import { applicants } from '../src/model/model.js';
import ApplicantsViewComponent from '../src/view/applicants-component.js';
import StatisticsViewComponent from '../src/view/statistics-component.js';
import FormViewComponent from '../src/view/form-component.js';
import FiltersViewComponent from '../src/view/filter-component.js';


export class ApplicantsPresenter {
    constructor(container) {
        this._container = container;
        this._statisticsView = new StatisticsViewComponent(applicants.length);
        this._formView = new FormViewComponent();
        this._filtersView = new FiltersViewComponent();
        this._applicantsView = new ApplicantsViewComponent(applicants);

        this._container.append(this._statisticsView.element);
        this._container.append(this._formView.element);
        this._container.append(this._filtersView.element);
        this._container.append(this._applicantsView.element);

        this.renderStatistics();
    }

    renderStatistics() {
        this._statisticsView.update(applicants.length);
    }

    addApplicant(applicant) {
        applicants.push(applicant);
        this._applicantsView.update(applicants);
        this.renderStatistics();
    }
}