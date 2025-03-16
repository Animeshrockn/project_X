import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAAboutusComponent } from './prod-a-aboutus.component';

describe('ProdAAboutusComponent', () => {
  let component: ProdAAboutusComponent;
  let fixture: ComponentFixture<ProdAAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdAAboutusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdAAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
