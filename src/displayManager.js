const DisplayManager = (() => {
    const displayList = (Todos) => {
        const content = document.querySelector('.content')

        Todos.forEach(element => {

            const newdiv = document.createElement('div')
            newdiv.classList.add('todo')
            const title_p = document.createElement('p')
            title_p.textContent = element.title

            const description_p = document.createElement('p')
            description_p.textContent = element.description

            const priority_p = document.createElement('p')
            priority_p.textContent = element.priority

            newdiv.appendChild(title_p)
            newdiv.appendChild(description_p)
            newdiv.appendChild(priority_p)

            content.appendChild(newdiv)

        });
    }


    return {displayList}
}) ()


export {DisplayManager}