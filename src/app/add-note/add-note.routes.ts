import { Routes } from "@angular/router";
import { AddNoteLayoutComponent } from './layouts/add-note-layout/add-note-layout.component';
import { AddNotePageComponent } from "./pages/add-note-page/add-note-page.component";

export const addNotesRoutes: Routes = [
    {   
        path: '',
        component: AddNoteLayoutComponent,
        children: [
            {
                path: 'add',
                component: AddNotePageComponent
            },
            {
                path: 'edit/:id',
                component: AddNotePageComponent
            },
            {
                path: '**',
                redirectTo: 'add'
            }
        ],
    },
]

export default addNotesRoutes