import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    ToolHeaderComponent,
    MyUppercasePipe,
    MyAppendPipe,
    EllipsisPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolHeaderComponent,
    MyUppercasePipe,
    MyAppendPipe,
    EllipsisPipe,
  ],
})
export class SharedModule { }
