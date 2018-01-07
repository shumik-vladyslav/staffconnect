import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fuseAnimations } from '../../core/animations';
import { FuseConfigService } from '../../core/services/config.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {ContentService} from "../../core/services/content.service";

@Component({
    selector   : 'fuse-content',
    templateUrl: './content.component.html',
    styleUrls  : ['./content.component.scss'],
    animations : fuseAnimations
})
export class FuseContentComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    fuseSettings: any;

    tabs = [];

    @HostBinding('@routerTransitionUp') routeAnimationUp = false;
    @HostBinding('@routerTransitionDown') routeAnimationDown = false;
    @HostBinding('@routerTransitionRight') routeAnimationRight = false;
    @HostBinding('@routerTransitionLeft') routeAnimationLeft = false;
    @HostBinding('@routerTransitionFade') routeAnimationFade = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fuseConfig: FuseConfigService,
        private contentService: ContentService
    )
    {
        this.tabs = this.contentService.getTabs();

        this.contentService.onTabsChange.subscribe(() => {
          this.tabs = this.contentService.getTabs();
        });

        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .subscribe((event) => {
                switch ( this.fuseSettings.routerAnimation )
                {
                    case 'fadeIn':
                        this.routeAnimationFade = !this.routeAnimationFade;
                        break;
                    case 'slideUp':
                        this.routeAnimationUp = !this.routeAnimationUp;
                        break;
                    case 'slideDown':
                        this.routeAnimationDown = !this.routeAnimationDown;
                        break;
                    case 'slideRight':
                        this.routeAnimationRight = !this.routeAnimationRight;
                        break;
                    case 'slideLeft':
                        this.routeAnimationLeft = !this.routeAnimationLeft;
                        break;
                }
            });

        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.fuseSettings = newSettings;
                    }
                );
    }

    ngOnInit()
    {

    }

    selectTab(tab){
      for(let item of this.tabs){
        item.showTab = false;
      }

      tab.showTab = true;
    }

    removeTab(tab){
      this.contentService.removeTab(tab.id);
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
