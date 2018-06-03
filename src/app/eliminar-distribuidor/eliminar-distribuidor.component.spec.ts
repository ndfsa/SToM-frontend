import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDistribuidorComponent } from './eliminar-distribuidor.component';

describe('EliminarDistribuidorComponent', () => {
  let component: EliminarDistribuidorComponent;
  let fixture: ComponentFixture<EliminarDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
