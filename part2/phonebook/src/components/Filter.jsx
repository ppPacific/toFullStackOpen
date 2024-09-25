
const Filter =({searched,setSearched})=> {
    return (
        <div>
            <input
                type={"text"} value={searched}
                onChange={(e) => setSearched(e.target.value)}/>
        </div>
    )
}
export default Filter
