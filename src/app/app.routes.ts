import { Routes } from '@angular/router';
import { AddSurveyComponent } from './pages/add-survey/add-survey.component';
import { EditServeyComponent } from './pages/edit-servey/edit-servey.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { NotFoundComponent } from './components/public/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';

export const routes: Routes = [
    {
        path: '',
        title: 'home',
        component: HomeComponent
    },
    {
        path: 'survey/:_id',
        title: 'servey',
        component: SurveyComponent
    },
    {
        path: 'add_survey',
        title: 'add survey',
        component: AddSurveyComponent
    },
    {
        path: 'edit_survey/:_id',
        title: 'edit survey',
        component: EditServeyComponent
    },
    {
        path: 'result/:_id',
        title: 'survey result',
        component: ResultComponent
    },
    {
        path: '*',
        component: NotFoundComponent
    }
];
