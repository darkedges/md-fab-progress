import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { MdFabProgressComponent } from './mdfabprogress.component';

describe('MdFabProgressComponent', () => {

  let comp:    MdFabProgressComponent;
  let fixture: ComponentFixture<MdFabProgressComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MdFabProgressComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(MdFabProgressComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(false).toBe(true);
  });
});
