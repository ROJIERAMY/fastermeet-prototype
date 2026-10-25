import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source=readFileSync('dist/app.js','utf8');
const planner=source.slice(source.indexOf('const assistantDrafts=new Map();'),source.indexOf('let assistantOpen='));
const fixture={hostingAccounts:[{id:'host1',identifier:'meeting-pool-01',status:'active',account_capacity_id:'cap1',current_usage:0,max_concurrent_usage:1}],events:[]};
let active=true,sequence=0;
const context=vm.createContext({
  now:new Date('2026-10-25T09:00:00'),today:'2026-10-25',
  dateISO:d=>d.toISOString().slice(0,10),addDays:n=>`2026-10-${25+n}`,
  niceDate:d=>d,uid:()=>`draft${++sequence}`,P:()=>fixture,
  activeSubscription:()=>active?{starts_at:'2026-10-01',ends_at:'2026-11-30'}:null,
  subscriptionPlan:()=>({is_active:true,account_capacity_id:'cap1'}),
  accountTypeFor:()=> 'Meeting',hostAvailable:()=>true,
});
vm.runInContext(planner,context);
const ask=(text,followup=false)=>vm.runInContext(`scheduleSuggestion(${JSON.stringify(text)},${followup})`,context);
const draft=result=>vm.runInContext(`assistantDrafts.get(${JSON.stringify(result.draft)})`,context);

assert.match(ask('احجز اجتماع بكرة').text,/الساعة كام/);
ask('احجز اجتماع بعنوان "Client demo" بكرة');
let proposed=draft(ask('الساعة ١١ صباحًا لمدة ٣٠ دقيقة',true));
assert.equal(proposed.title,'Client demo');
assert.equal(proposed.date,'2026-10-26');
assert.equal(proposed.time,'11:00');
assert.equal(proposed.duration,30);
assert.equal(draft(ask('at 12 pm',true)).time,'12:00');
assert.equal(draft(ask('at 12 pm',true)).duration,30);
proposed=draft(ask('Schedule a meeting on 2026-10-28 at 11:30 am'));
assert.equal(proposed.date,'2026-10-28');
assert.equal(proposed.time,'11:30');
assert.equal(proposed.duration,45);
assert.equal(draft(ask('احجز اجتماع بكرة الساعة ١١ صباحًا')).duration,45);
active=false;
assert.match(ask('Schedule tomorrow at 11 am').text,/active subscription/);

const allocator=source.slice(source.indexOf('function hostAvailable('),source.indexOf('const handlers='));
vm.runInContext(allocator,context);
context.eventMeeting=e=>e;
fixture.events=[{id:'event:other-customer',status:'Scheduled',host:'meeting-pool-01',date:'2026-10-26',time:'11:00',duration:60}];
assert.equal(vm.runInContext("hostAvailable('meeting-pool-01','2026-10-26','11:30',30)",context),false);
assert.equal(vm.runInContext("hostAvailable('meeting-pool-01','2026-10-26','12:00',30)",context),true);
console.log('Passed: bilingual multi-message scheduling, ISO times, entitlement and shared host conflicts.');
