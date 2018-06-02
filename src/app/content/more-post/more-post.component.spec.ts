import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePostComponent } from './more-post.component';

describe('MorePostComponent', () => {
  let component: MorePostComponent;
  let fixture: ComponentFixture<MorePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
