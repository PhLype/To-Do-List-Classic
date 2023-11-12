const container = document.querySelector(".container");
const inputTask = document.getElementById("inputTask");
const btnTask = document.getElementById("btnTask");
const tasks = document.querySelector("div.tasks");
const btnRemoveTasks = document.getElementById("removeTasks");
const btnEditTasks = document.getElementById("editTasks");
const inputTaskUpdate = document.getElementById("inputTaskUpdate");

btnTask.addEventListener('click', (event) => {
    if (inputTask.value === "") {
        return alert("Você precisa escrever alguma tarefa para depois adicionar.");
    } else {
        tasks.innerHTML += `
            <div class="tasks-box">
                <input type="checkbox" class="task-checkbox"><p>${inputTask.value}</p>
            </div>
        `;
        inputTask.value = "";
    }
});

btnRemoveTasks.addEventListener('click', (event) => {
    // Obtendo todas as checkboxes marcadas
    const checkboxes = document.querySelectorAll(".task-checkbox:checked");

    // Iterando sobre as checkboxes marcadas e removendo as tarefas correspondentes
    checkboxes.forEach((checkbox) => {
        const taskBox = checkbox.closest(".tasks-box");
        taskBox.remove();
    });
});

btnEditTasks.addEventListener('click', (event) => {
    // Obtendo todas as checkboxes marcadas
    const checkboxes = document.querySelectorAll(".task-checkbox:checked");

    // Iterando sobre as checkboxes marcadas e removendo as tarefas correspondentes
    checkboxes.forEach((checkbox) => {
        const taskBox = checkbox.closest(".tasks-box");

        document.getElementById('editTasks').addEventListener('click', function() {
            document.getElementById('myModal').style.display = 'block';

            document.getElementById('btnTaskUpdate').addEventListener('click', () => {
                inputTaskUpdate.placeholder = taskBox.value;
                if(inputTaskUpdate.value ===  "" && inputTaskUpdate.value === inputTaskUpdate.value) return alert(`Error`)
                taskBox.innerHTML = `
                    <div class="tasks-box">
                        <input type="checkbox" class="task-checkbox"><p>${inputTaskUpdate.value}</p>
                    </div>
                `;
                document.getElementById('myModal').style.display = 'none';
            })
        });
        
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('myModal').style.display = 'none';
        });
        
        // Fechar o modal se o usuário clicar fora da área do modal
        window.addEventListener('click', function(event) {
            if (event.target == document.getElementById('myModal')) {
                document.getElementById('myModal').style.display = 'none';
            }
        });
    });
});
