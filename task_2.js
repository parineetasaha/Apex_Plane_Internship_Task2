document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = this.elements['name'].value.trim();
    const email = this.elements['email'].value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!name || !email) {
        alert('Please fill in both your name and email.');
        e.preventDefault();
        return;
    }
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }
    alert('Thank you for contacting us!');
    this.reset(); 
    e.preventDefault(); 
});

document.getElementById('addTask').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;

       
        const cross = document.createElement('span');
        cross.textContent = '✖';
        cross.style.float = 'right';
        cross.style.cursor = 'pointer';
        cross.style.marginLeft = '12px';
        cross.style.color = '#ad1457';
        cross.style.fontWeight = 'bold';
        cross.onclick = function(e) {
            e.stopPropagation(); 
            li.remove();
        };

        li.appendChild(cross);
        document.getElementById('taskList').appendChild(li);
        alert('Task added!');
        input.value = '';
    }
});