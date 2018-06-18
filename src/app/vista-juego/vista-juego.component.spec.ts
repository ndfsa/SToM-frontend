import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaJuegoComponent } from './vista-juego.component';

describe('VistaJuegoComponent', () => {
  let component: VistaJuegoComponent;
  let fixture: ComponentFixture<VistaJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
