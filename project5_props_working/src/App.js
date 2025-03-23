import ChildComponent from "./childComponent";

function App() {
  const urls = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6InF-eqqrXQbDnYEu7BwJOlWv8JqdCtkPg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4irH79AAy9E8q0uq9FCL4iAALeYRL8nT2Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCksU6Dcy3woHjQMrF00UAK2aA204tKZ_m5Q&s",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0"
  ];

  return (
    <div>
      <h1>Parent Component is App.</h1>
      {
        urls.map((url, index) => {
          return(
            <ChildComponent key={index} src={url} />
          );
        })
      }
      <ChildComponent>
        <p>This is a Children JSX passed inside Child-Component through parent App-component. And getting rendered with the help of children key of the props object passed inside the child component.</p>
      </ChildComponent>
    </div>
  );
}

export default App;
