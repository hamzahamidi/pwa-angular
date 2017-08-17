import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'app-about',
  animations: [
    trigger(
      'enterAnimationFromRight', [
        transition(':enter', [
          style({ transform: 'translateX(50%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(50%)', opacity: 0 }))
        ])
      ]
    ),
    trigger(
      'enterAnimationFromLeft', [
        transition(':enter', [
          style({ transform: 'translateX(-50%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(-50%)', opacity: 0 }))
        ])
      ]
    ),
    trigger(
      'enterAnimationVetically', [
        transition(':enter', [
          style({ transform: 'translateY(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateY(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateY(100%)', opacity: 0 }))
        ])]
    )
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
