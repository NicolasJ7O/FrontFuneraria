import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeServiceComponent } from './finalize-service.component';

describe('FinalizeServiceComponent', () => {
  let component: FinalizeServiceComponent;
  let fixture: ComponentFixture<FinalizeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizeServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
