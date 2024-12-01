import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NealPage } from './neal.page';

describe('NealPage', () => {
  let component: NealPage;
  let fixture: ComponentFixture<NealPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
