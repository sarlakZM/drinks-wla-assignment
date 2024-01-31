import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {
  GENERAL_CONFIG_DATA,
  GeneralConfig,
} from '../../config/general.config';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        {
          provide: GENERAL_CONFIG_DATA,
          useValue: GeneralConfig,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the title of app based on general config value', () => {
    const span = fixture.nativeElement.querySelector('span');
    expect(span.textContent).toContain(component.generalConfig.appTitle);
  });
});
