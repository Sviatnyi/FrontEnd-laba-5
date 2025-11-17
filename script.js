// ===== Завдання 1 =====

document.getElementById('check-btn').addEventListener('click', function () {
    const faculty = document.getElementById('faculty');
    const birth = document.getElementById('birth');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const result = document.getElementById('validation-result');

    const regexFaculty = /^[А-Яа-яA-Za-zІіЇїЄєҐґ]{2,}$/;
    const regexBirth = /^\d{2}\.\d{2}\.\d{4}$/;
    const regexAddress = /^м\.[А-Яа-яA-Za-zІіЇїЄєҐґ]{2,}$/;
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z]+\.[A-Za-z]{2,}$/;

    [faculty, birth, address, email].forEach(el => el.classList.remove('invalid'));

    let isValid = true;

    if (!regexFaculty.test(faculty.value.trim())) {
        faculty.classList.add('invalid');
        isValid = false;
    }

    if (!regexBirth.test(birth.value.trim())) {
        birth.classList.add('invalid');
        isValid = false;
    }

    if (!regexAddress.test(address.value.trim())) {
        address.classList.add('invalid');
        isValid = false;
    }

    if (!regexEmail.test(email.value.trim())) {
        email.classList.add('invalid');
        isValid = false;
    }

    if (isValid) {
        result.style.color = 'green';
        result.textContent = '✅ Усі дані введено коректно!';
    } else {
        result.style.color = 'red';
        result.textContent = '❌ Деякі поля заповнено неправильно. Перевірте введені дані.';
    }
});


// ===== Завдання 2 =====

const container = document.getElementById('table-container');
const colorPicker = document.getElementById('color-picker');
const table = document.createElement('table');

let num = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = num;

        // === Події ===

        // 1. При наведенні — лише якщо номер = варіанту (5)
        cell.addEventListener('mouseenter', () => {
            if (parseInt(cell.textContent) === 5) {
                const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 85%, 65%)`;
                cell.style.backgroundColor = randomColor;
            }
        });

        // 2. При click — змінюємо колір з палітри
        cell.addEventListener('click', () => {
            if (parseInt(cell.textContent) === 5) {
                colorPicker.click(); // відкриваємо палітру
                colorPicker.oninput = () => {
                    cell.style.backgroundColor = colorPicker.value;
                };
            }
        });

        // 3. При dblclick — для варіанта 5:
        // зміна кольору всіх клітинок таблиці, крім обраної
        cell.addEventListener('dblclick', () => {
            if (parseInt(cell.textContent) === 5) {
                const allCells = table.querySelectorAll('td');
                allCells.forEach(td => {
                    if (td !== cell) {
                        const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 85%, 65%)`;
                        td.style.backgroundColor = randomColor;
                    }
                });
            }
        });

        row.appendChild(cell);
        num++;
    }
    table.appendChild(row);
}
container.appendChild(table);
