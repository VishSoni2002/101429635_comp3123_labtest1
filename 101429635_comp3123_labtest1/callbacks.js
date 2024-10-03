function resolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved Promise!");  // Success after 500ms
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected Promise!");  // Failure after 500ms
    }, 500);
  });
}

// Handling resolvedPromise
resolvedPromise()
  .then(result => console.log(result))  // Output: Resolved Promise!
  .catch(error => console.log(error));

// Handling rejectedPromise
rejectedPromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));  // Output: Rejected Promise!
