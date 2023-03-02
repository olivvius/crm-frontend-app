import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddUserComponent } from './page-add-user.component';

describe('PageAddUserComponent', () => {
  let component: PageAddUserComponent;
  let fixture: ComponentFixture<PageAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
