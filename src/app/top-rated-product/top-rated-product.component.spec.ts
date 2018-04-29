import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedProductComponent } from './top-rated-product.component';

describe('TopRatedProductComponent', () => {
  let component: TopRatedProductComponent;
  let fixture: ComponentFixture<TopRatedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
