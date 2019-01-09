import { NgModule, COMPILER_OPTIONS, CompilerFactory, Compiler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogService } from './blog.service';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { NbSpinnerModule } from '../../../node_modules/@nebular/theme';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    NbSpinnerModule
  ],
  declarations: [
    BlogComponent
  ],
  providers: [
    BlogService,
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}
  ]
})
export class BlogModule { }
