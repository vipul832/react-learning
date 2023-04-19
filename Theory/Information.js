/* 
  
** Code-Splitting

- To create different bundle file for different or special component,
so it will help in loading application much faster.

- Not to load hall code in one single page.



=> Dynamic loading

import ("./math").then(math=>{
    console.log(math.add(16,26));
});


** React.lazy

 - function lets you render a dynamic import  as a regular component.

 -- this will automatically load the bundle containing the otherComponent when,
 this component is first rendered.

 Example: 
 const otherComponent = React.lazy(()=>import('./OtherComponent'));

-- This must return a Promise which resolves to a module with a default export containing  react component.


** The lazy component should then be render inside a "Suspense" Component

Example: for Suspense

import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>  
        <OtherComponent />
      </Suspense>
    </div>
  );
}









*/
