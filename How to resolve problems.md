2019-10-16

#### Problem:
Clicking on the dropdown arrow, the dropdown menu does not show up.

#### Resolving:
The user is using Firefox60.0ESR to load our app.  
Our dropdown implementation is using a `<button>` to wrap a `<ul>` tag, in this way, we can position the menu easily.  
`<button>` element is a special case in event dispatch for Firefox older versions (changed in Firefox66).  

#### Notes:
**The way to descible the problem is very important.**
- The first step to debug a UI issue is inspecting the page and checking console and network tab.  
- Our PMs and team members are very familiar with this step, since we debugged bugs in front of them so many times.  
- So the PM descible this issue as  
Clicking on dropdown arrow, nothing happens, nothing happens in console, no calls sent out.  
- Then I am keep thinking:  
Is the network connected?  
Is other call been sent out?  
Do other filters work well?  
Is browser freezed?  
Did they hard refresh the page to avoid the old verson of the app?  
There is no wifi, and no cell phone signal there.  
- Finally, team offsite shared the screen to us, the real problem is clicking on the dropdown arrow, the dropdown menu does not show up.
- What I can do better with this situation/problem  
Read the problem description multiple times.  
Provide a different way to describe the issue if someone is clueless.

**Using semantic HTML is very important.**
- Browsers give dev flexibility to use different HTML tags to achieve the same goal, but the standard way to use HTML is very important.
- Improve accessibility of the site. 

**Is they a good way to test the app against different browsers easily?**
- B2B business, the browser version normally is very old, and they are not be able to upgrade their browser due to security policy.
- I downloaded different versions of Firefox and tested the app manually. 
- Is there a online resource that allow us to test browser compatibility? https://www.browserling.com/ is very slow
- Can I build a tool to achieve this? and run all E2E tests on it?

