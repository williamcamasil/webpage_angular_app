# Material Components

#### Links

- [material](https://material.angular.io/components/expansion/overview)
- [help add browserAnimationsModule](https://stackoverflow.com/questions/43241193/found-the-synthetic-property-panelstate-please-include-either-browseranimati)



#### Depedência

[Material - Get Started](https://material.angular.io/guide/getting-started)

````
ng add @angular/material
````



#### Criação de **Componente**

- ```
  ng g c components/template/mat-expand
  ```



#### Arquivo app.modulo.ts

Inserido imports (BrowserAnimationsModule / MatExpandComponent / MatExpansionModule)

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatExpandComponent } from './components/template/mat-expand/mat-expand.component';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    //novos components / páginas
    MatExpandComponent
  ],
  imports: [
    BrowserModule,
    //novos modulos do material
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**OBS:** Não estava funcionando o MatExpansionModule até inserir o BrowserAnimationsModule, a qual identifiquei o erro no console do Browser.

