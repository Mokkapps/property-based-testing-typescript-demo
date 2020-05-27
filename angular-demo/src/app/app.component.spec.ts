import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import * as fc from 'fast-check';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe('indexOf Property based tests', () => {
    it('should always contain itself', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      fc.assert(fc.property(fc.string(), text => app.indexOf(text, text) !== -1));
    });

    it('should always contain its substrings', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      fc.assert(
        fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
          // Alternatively: no return statement and direct usage of expect or assert
          return app.indexOf(b, a + b + c) !== -1;
        }),
      );
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-demo app is running!');
  });
});
