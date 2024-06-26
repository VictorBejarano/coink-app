import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
/**
 * Rutas de la aplicacion.
 */
const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./ui/pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "sign-up",
    loadChildren: () =>
      import("./ui/pages/sign-up/sign-up.module").then(
        (m) => m.SignUpPageModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./ui/pages/dashboard/dashboard.module").then(
        (m) => m.DashboardPageModule
      ),
  },
];
/**
 * Modulo de enrutamiento de la aplicacion.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
