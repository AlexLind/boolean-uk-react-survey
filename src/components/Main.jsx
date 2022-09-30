import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const radioCheckedInitial = {
    first: false,
    second: false,
    third: false,
    fourth: false,
  }
  const [color, setColor] = useState(0);
  const [timeSpend, setTimeSpend] = useState([]);
  const [comment, setComment] = useState(``);
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [checked, setChecked] = useState(radioCheckedInitial);

  const onSubmit = (event) => {
    event.preventDefault();

    const surveyAnswer = {
      color: color,
      timeSpend: timeSpend,
      comment: comment,
      name: name,
      email: email
    }

    console.log(surveyAnswer);
    event.target.reset()
    resetForm();

  }

    const resetForm = () => {
      setComment(``);
      setName(``);
      setEmail(``);
      setChecked(radioCheckedInitial);
    }
  
    console.log(checked)

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
      <form className="form" onSubmit={(e) => onSubmit(e)}>
  <h2>Tell us what you think about your rubber duck!</h2>
  <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul>
  <li>
    <input id="color-one" type="radio" name="color" checked={checked.first} value="1" onClick={(e) => {setColor(e.target.value); setChecked({...checked, first: !checked.first }) }} /><label
      htmlFor="color-one"
      >1</label>
  </li>
  <li>
    <input id="color-two" type="radio" name="color" checked={checked.second} value="2" onClick={(e) => {setColor(e.target.value); setChecked({...checked, second: !checked.second }) }} /><label
      htmlFor="color-two"
      >2</label>
  </li>
  <li>
    <input id="color-three" type="radio" name="color" checked={checked.third} value="3" onClick={(e) => {setColor(e.target.value); setChecked({...checked, third: !checked.third }) }} /><label
      htmlFor="color-three"
      >3</label>
  </li>
  <li>
    <input id="color-four" type="radio" name="color" checked={checked.fourth} value="4" onClick={(e) => {setColor(e.target.value); setChecked({...checked, fourth: !checked.fourth }) }} /><label
      htmlFor="color-four"
      >4</label
    >
  </li>
</ul>
  </div>
  <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="swimming"
        onClick={(e) => setTimeSpend([...timeSpend, e.target.value])} /><label
      />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="bathing"  onClick={(e) => setTimeSpend([...timeSpend, e.target.value])} />Bathing</label
    >
  </li>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="chatting"
        onClick={(e) => setTimeSpend([...timeSpend, e.target.value])}
      />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="noTime" onClick={(e) => setTimeSpend([...timeSpend, e.target.value])} />I don't like to
      spend time with it</label
    >
  </li>
</ul>
  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      value={name}
      onChange={(e) => setName(e.target.value)}
      pattern="(^[A-Za-zøæå]{3,16})([ ]{0,1})([A-Za-zøæå]{3,16})?([ ]{0,1})?([A-Za-zøæå]{3,16})?([ ]{0,1})?([A-Za-zøæå]{3,16})"
      /></label
  ><label
    >Leave us your email pretty please??<input
      type="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      /></label
  ><input className="form__submit" type="submit" value="Submit Survey!" />
  <input className="form__submit" type="reset" value="Reset!" />

</form>
      </section>
    </main>
  );
}

export default Main;
