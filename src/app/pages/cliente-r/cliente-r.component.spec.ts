import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRComponent } from './cliente-r.component';

describe('ClienteRComponent', () => {
  let component: ClienteRComponent;
  let fixture: ComponentFixture<ClienteRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
