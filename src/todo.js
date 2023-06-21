const Todo = (title)  => {
    // final properties X is implemented:
    // X title 
    // X description 
    // - dueDate - optional
    // X priority
    // - notes - optional
    // - status

    let _title = title
    let _description = ''
    let _priority = 1
    let _status = 'open'

    const closeTodo = () => {
        _status = "closed"
    }

    
    return {
        get title () {
            return _title 
        },
        set description(description) {
            _description = description
        },
        get description() {
            return _description
        },
        set priority(priority) {
            _priority = priority
        },
        get priority() {
            return _priority
        },
        get status() {
            return _status
        }
    }

}

export {Todo}