function F1()
{
    const myStyle = {
		color: "blue",
		backgroundColor: "orange"
	}
    return(
        <div>
            <h1 style={{color:"red"}}>Inline style</h1>
		 <h1 style={myStyle}>Internal style</h1>
        </div>
    )
}
export default F1;
