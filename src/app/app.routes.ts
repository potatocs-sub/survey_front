import { Routes } from '@angular/router';
import { AddSurveyComponent } from './pages/add-survey/add-survey.component';
import { EditServeyComponent } from './pages/edit-servey/edit-servey.component';
import { ServeyComponent } from './pages/survey/survey.component';
import { NotFoundComponent } from './components/public/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'home',
        component: HomeComponent
    },
    {
        path: 'survey/:_id',
        title: 'servey',
        component: ServeyComponent
    },
    {
        path: 'add_survey',
        title: 'add survey',
        component: AddSurveyComponent
    },
    {
        path: 'edit_survey',
        title: 'edit servey',
        component: EditServeyComponent
    }, {
        path: '*',
        component: NotFoundComponent
    }
];
