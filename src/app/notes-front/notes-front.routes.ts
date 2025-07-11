import { Routes } from "@angular/router";
import { NoteLayoutComponent } from "./layouts/note-layout/note-layout.component";
import { NotePageComponent } from "./pages/note-page/note-page.component";

export const notesFrontRoutes: Routes = [
    {
        path: '',
        component: NoteLayoutComponent,
        children: [
            {
                path: '',
                component: NotePageComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]

export default notesFrontRoutes