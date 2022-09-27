import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { OrderEntryComponent } from './ui/order-entry/order-entry.component';

const routes: Routes = [
    { path: 'order-entry', component: OrderEntryComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }
