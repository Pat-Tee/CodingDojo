import React, {useState} from 'react';

const BoxGenerator = () => {

    const [boxColor, setBoxColor] = useState("black");  // store state and set default box color value to black
    const [boxSize, setBoxSize] = useState(100);

    const [boxList, setBoxList] = useState([]);

    const addBox = (e) => {
        e.preventDefault();
        const newBox = { boxColor, boxSize };           //same as saying const newBox = {boxColor: boxColor, boxSize: box}
        setBoxList([...boxList, newBox]);
    }
    return ( <div>

        <form onSubmit= { (e)=>addBox(e) } className="form-group">
            <h3>Color</h3>
            <input onChange = {(e)=>setBoxColor(e.target.value)} type="text" name="boxColor" id="boxColor"></input>
            <h3>Size</h3>
            <input onChange = {(e)=>setBoxSize(e.target.value)} type="text" name="boxSize" id="boxSize"></input>
            <button type="submit">Add</button>
        </form>

        { boxList.map((box, i) =>{
            // return <div style = {{ display: 'inline-flex', backgroundColor : box.boxColor, height : Number(box.boxSize), width: Number(box.boxSize), margin: 5, borderRadius: 10 }}>
            //     </div>
            return <div key={i} style = {{ display: 'inline-flex', backgroundColor : box.boxColor, height : `${box.boxSize}px`, width: Number(box.boxSize), margin: 5, borderRadius: 10 }}>
                </div>

            })
        } </div>)
}

export default BoxGenerator