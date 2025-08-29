
export default function ColourRating({handleChange}) {
  return (
    <div className="form_group radio">
        <ul>
          <li>
            <input 
            id="color-one" type="radio" name="colourRating" value="1" onChange={handleChange} />
            <label htmlFor="color-one"> 1 </label>
          </li>
          <li>
            <input id="color-two" type="radio" name="colourRating" value="2" onChange={handleChange} />
            <label htmlFor="color-two"> 2 </label>
          </li>
          <li>
            <input id="color-three" type="radio" name="colourRating" value="3" onChange={handleChange} />
            <label htmlFor="color-three"> 3 </label>
          </li>
          <li>
            <input id="color-four" type="radio" name="colourRating" value="4" onChange={handleChange} />
            <label htmlFor="color-four"> 4 </label>
          </li>
        </ul>
    </div>
  );
}