import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidorModificarComponent } from './distribuidor-modificar.component';

describe('DistribuidorModificarComponent', () => {
  let component: DistribuidorModificarComponent;
  let fixture: ComponentFixture<DistribuidorModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuidorModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuidorModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
