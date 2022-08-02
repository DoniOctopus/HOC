import WithToggle from "../shared/WithToggle";

const LabelToggle = ({toggle, toggleStatus, title}) => {
    console.log()
    return (
        <div>
            {toggleStatus ? <input type="text" value={title}/> : <span>{title}</span>}
            <div>
                <button onClick={toggle}>{toggleStatus ? 'cancle' : 'edit'}</button>
            </div>
        </div>

    )
}
export default WithToggle(LabelToggle);