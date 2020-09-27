import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblsimbolosComponent } from './tblsimbolos.component';

describe('TblsimbolosComponent', () => {
  let component: TblsimbolosComponent;
  let fixture: ComponentFixture<TblsimbolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblsimbolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblsimbolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
