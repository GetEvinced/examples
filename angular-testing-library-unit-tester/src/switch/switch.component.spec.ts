import { render } from '@testing-library/angular';
import { SwitchComponent } from './switch.component';
import EvincedUT from '@evinced/unit-tester';


describe('SwitchComponent', () => {

  it(`should be accessible`, async () => {
    await render(SwitchComponent, { inputs: { label: 'Dark mode' } });
    const results = await EvincedUT.analyzeSwitch({ role: 'switch'});
    expect(results).toHaveNoFailures();
  });

});
