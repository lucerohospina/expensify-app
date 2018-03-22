console.log('app running');

// JSX: JavaScript XML

const obj = {
  title: 'Indecision App',
  // subtitle: 'Put your life in the hands of a computer',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    obj.options.push(option);
    e.target.elements.option.value = '';
    render()
  }
};

const removeAll = () => {
  console.log(obj.options);
  obj.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * obj.options.length);
  const option = obj.options[randomNumber];
  alert(option);
}
 
const render = () => {
  const template = (
    <div>
      <h1>{obj.title}</h1>
      {(obj.subtitle && <p>{obj.subtitle}</p>)}
      <p>{obj.options.length>0 ? "Here are your options" : "No options"}</p>
      <button disabled={obj.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {
          obj.options.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(
    template, 
    document.getElementById('app')
  );
};

render();