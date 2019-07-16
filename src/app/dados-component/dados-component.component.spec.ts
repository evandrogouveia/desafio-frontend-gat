import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosComponentComponent } from './dados-component.component';

describe('DadosComponentComponent', () => {
  let component: DadosComponentComponent;
  let fixture: ComponentFixture<DadosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
