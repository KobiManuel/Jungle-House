import { useState } from 'react'
function QuestionForm() {
    const [inputValue, setInputValue] = useState('Ask your question here')

    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
    
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
             <button onClick={() => alert(inputValue)}>Alert me 🚨</button>
        </div>
    )
}

export default QuestionForm

/*function QuestionForm () {
    return(
<form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Type your text' />
    <button type='submit'>Enter</button>
</form>)
}

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

export default QuestionForm */