/**
 * Here what do we mean when we talk about JSX based function Component is using the 
 React HTML based markup sutax for creating UI.
 */

function CarTileJSX() {
    return(
        <section>
            <div className = "first">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCksU6Dcy3woHjQMrF00UAK2aA204tKZ_m5Q&s" alt="" />
            </div>
  
            <div className = "second">
                <img src = "https://imgd.aeplcdn.com/370x208/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0" alt="" />
            </div>

        </section>
    );
}

export default CarTileJSX;