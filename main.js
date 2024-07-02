let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

let taskList = []

function addTask() {
    let taskContent = taskInput.value
    taskList.push(taskContent)
    render()
}

function render(){
    let resultHTML = ``;
    for(let i= 0; i< taskList.length; i++){
        resultHTML += `<div class="task">
                    <div> ${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`
    }
    //innerHTML: Element의 HTML, XML을 읽어오거나, 설정할 수 있다. 태그 안에 있는 HTML 전체 내용을 들고옴
    //textContent: 해상 노드가 가지고 있는  텍스트 값을 그대로 가져옴.
    //innerHTML, outerHTML의 차이: inner는 지정한 요소 태그를 제외한 안쪽 태그 값, outer는 지정한 요소 태그도 포함
    document.getElementById("task-board").innerHTML = resultHTML;
}