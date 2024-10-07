import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMascotasComponent } from './visualizar-mascotas.component';

describe('VisualizarMascotasComponent', () => {
  let component: VisualizarMascotasComponent;
  let fixture: ComponentFixture<VisualizarMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizarMascotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
