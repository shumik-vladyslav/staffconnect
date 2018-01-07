import { Component, HostBinding, Input, OnInit } from '@angular/core';
import {ContentService} from "../../../../services/content.service";

@Component({
    selector   : 'fuse-nav-vertical-item',
    templateUrl: './nav-vertical-item.component.html',
    styleUrls  : ['./nav-vertical-item.component.scss']
})
export class FuseNavVerticalItemComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-item';
    @Input() item: any;

    constructor(private contentService: ContentService)
    {
    }

    ngOnInit()
    {
    }

    select(){
        let item:any = Object.assign({}, this.item);

        item.type = item.typeNav;
        this.contentService.addTab(item);
        console.log(this.item)
    }
}
