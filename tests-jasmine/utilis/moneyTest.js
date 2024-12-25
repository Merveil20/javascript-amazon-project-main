import { FormatCurrency } from '../../scripts/utilis/money.js';

describe('test suite: formatCurrency',()=>{
   it('convert cents into dollars', ()=>{
    expect(FormatCurrency(2095)).toEqual('20.95');
   });

   it('works with 0', ()=>{
    expect(FormatCurrency(0)).toEqual('0.00');
   });
   it('rounds up to the nearest cent', ()=>{
    expect(FormatCurrency(2000.5)).toEqual('20.01');
   });
});