console.log("Завдання: 4 ==============================");

function task4() {
  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Після 1 секунди викликаємо функцію resolve зі значенням 'Проміс 1 виконано'.
        resolve("Проміс 1 виконано");
      }, 1000);
    });
  }

  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Після 1 секунди викликаємо функцію resolve зі значенням 'Проміс 2 виконано'.
        resolve("Проміс 2 виконано");
      }, 1000);
    });
  }

  // Використовуємо Promise.all для обробки масиву промісів promise1 та promise2.
  Promise.all([promise1(), promise2()])
    .then((results) => {
      // Функція then викликається, коли обидва проміси вирішено.
      // Результати промісів передаються у функцію then у вигляді масиву.
      console.log(results);
    })
    .catch((error) => {
      // Функція catch викликається, якщо будь-який з промісів відхилено.
      // Повідомлення про помилку від першого відхиленого проміса передається у функцію catch.
      console.error(error);
    })
    .finally(() => {
      // Функція finally викликається незалежно від того, чи вирішено проміси, чи відхилено.
      console.log("Всі операції завершено");
    });
}

// Викликаємо функцію task4
task4();
