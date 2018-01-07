import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'sample',
                        'title': 'Users',
                        'translate': 'NAV.SAMPLE.TITLE',
                        'type' : 'item',
                        'icon' : 'person',
                        'url'  : '/sample',
                        typeNav: "users",
                        showTab: true,
                        label: "Users"
                        // 'badge': {
                        //     // 'title': 25,
                        //     'translate': 'NAV.SAMPLE.BADGE',
                        //     'bg'   : '#F44336',
                        //     'fg'   : '#FFFFFF'
                        // }
                    },
                    {
                      'id'   : 'Calendar',
                      'title': 'Calendar',
                      'translate': 'NAV.SAMPLE.TITLE',
                      'type' : 'item',
                      'icon' : 'event',
                      'url'  : '/c',
                      typeNav: "calendar",
                      showTab: true,
                      label: "Calendar"
                    }
                ]
            }
        ];
    }
}
