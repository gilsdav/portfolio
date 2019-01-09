import {
  Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver, Compiler,
  NgModule, ViewContainerRef, Injector, NgModuleRef, AfterViewInit, ComponentRef
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  private category: string;
  private id: string;
  private isCategory: boolean;
  private routerSubscription: Subscription;
  public content: string;
  private cmpRef: ComponentRef<any>;
  public loading: boolean;
  @ViewChild('vc', { read: ViewContainerRef }) private vc: ViewContainerRef;

  constructor(private route: ActivatedRoute, private router: Router,
    private blogService: BlogService, private compiler: Compiler) {
      this.loading = false;
    }

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.refreshPageFromParams();
      });
    this.refreshPageFromParams();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    this.cleanComponent();
  }

  private refreshPageFromParams(): void {
    this.loading = true;
    this.category = this.route.snapshot.params['category'];
    this.id = this.route.snapshot.params['id'];
    this.isCategory = !this.id;
    this.refreshDataFromService();
  }

  private refreshDataFromService(): void {
    this.blogService.get(this.category, this.id).subscribe(data => {
      this.content = data;
      this.applyDataToAngular();
      this.loading = false;
    });
  }

  private applyDataToAngular(): void {
    this.cleanComponent();
    const template = this.content;

    const tmpCmp = Component({ template: template })(class {
    });
    const tmpModule = NgModule({
      declarations: [tmpCmp],
      imports: [RouterModule]
    })(class {
    });

    this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
      .then((factories) => {
        const f = factories.componentFactories[1];
        this.cmpRef = this.vc.createComponent(f);
        this.cmpRef.instance['name'] = 'dynamic';
      });
  }

  private cleanComponent(): void {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

}
