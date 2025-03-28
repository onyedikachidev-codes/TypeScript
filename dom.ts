// //Type Assertion //used when you know more than typeScript
// let mystery: unknown = 4;

// const numChars = (mystery as string).length;

// //DOM Manipulation
// const btn = document.getElementById("btn");
// const input = document.getElementById("todoinput")! as HTMLInputElement;
// const form = document.querySelector("form")!;

// btn?.addEventListener("click", function () {
//   alert("clicked");
// });

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("Submitted");
// });

// // ------------OR-------------------

// // function handleSubmit(e: SubmitEvent) {
// //   e.preventDefault();
// //   console.log("Submitted");
// // }

// // form.addEventListener("submit", handleSubmit);
