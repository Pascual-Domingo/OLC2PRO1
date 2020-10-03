import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphASTComponent } from './graph-ast.component';

describe('GraphASTComponent', () => {
  let component: GraphASTComponent;
  let fixture: ComponentFixture<GraphASTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphASTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphASTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
