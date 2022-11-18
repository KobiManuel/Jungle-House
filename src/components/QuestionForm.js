function QuestionForm () {
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

export default QuestionForm