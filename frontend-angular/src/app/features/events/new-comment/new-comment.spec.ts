import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComment } from './new-comment';

describe('NewComment', () => {
  let component: NewComment;
  let fixture: ComponentFixture<NewComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
