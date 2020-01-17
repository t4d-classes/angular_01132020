// import { Observable, interval } from 'rxjs';
// import { map, filter, skip, take } from 'rxjs/operators';

// const ops = [
//   map( (num: number) => num * 2),
//   filter( (num: number) => num > 20 ),
//   skip(3),
//   take(5),
// ];

// interval(100)
//   .pipe(
//     ...ops as [],
//   )
//   .subscribe(num => {
//     console.log(num);
//   });

  // interval(100).map(num => num * 2).subscribe(num => {
  //   console.log(num);
  // });







// let outerCounter = 0;

// const o = new Observable<number>(subscribe => {

//   let myOuterCounter = outerCounter++;

//   let counter = 0;

//   let handle = setInterval(() => {

//     if (subscribe.closed) {
//       clearInterval(handle);
//       return;
//     }

//     console.log('interval executed again: ', myOuterCounter);
//     subscribe.next(counter++);

//   }, 500);

//   setTimeout(() => {

//     clearInterval(handle);
//     subscribe.complete();

//   }, 5000);

// });

// const subscription = o.subscribe(num => {

//   console.log(num);

// });

// // const subscription2 = o.subscribe(num => {

// //   console.log(num);

// // });


// setTimeout(() => {

//   subscription.unsubscribe();
//   // subscription2.unsubscribe();

// }, 10000);







// console.log('creating a promise');
// const p = new Promise<any>(function(resolve) {

//   console.log('running the function passed to the promise constructor');
//   setTimeout(() => {
//     console.log('resolving');
//     resolve();
//   }, 2000);

// });

// console.log('promise object created');

// p.then(() => {
//   console.log('in the then block');
// });

// p.then(() => {
//   console.log('in the then block');
// });

// console.log('creating an observable');
// const o = new Observable<any>(subscribe => {

//   console.log('running the function passed to the observable constructor');
//   setTimeout(() => {
//     subscribe.next('emitting data');
//   }, 2000);

// });

// console.log('observable object created');

// o.subscribe(() => {
//   console.log('in the subscribe block');
// });

// o.subscribe(() => {
//   console.log('in the subscribe block');
// });



import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
