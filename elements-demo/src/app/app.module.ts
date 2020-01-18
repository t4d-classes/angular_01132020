import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent, HelloWorldComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {

    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('my-own-element', el);

    const el2 = createCustomElement(HelloWorldComponent, { injector: this.injector });
    customElements.define('hello-world', el2);

  }
}
