export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }

}

/*
    EXEMPLO:
    <If test={aluno.nota >= 7}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    <If>
 */