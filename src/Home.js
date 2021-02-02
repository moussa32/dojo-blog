const Home = () => {

    const handelClick = (eventObject) => {
        console.log('Hello');
        console.log(eventObject);
    }
    const handelClickWithArgument = (name, e) => {
        console.log(name);
        console.log(e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handelClick}>Click here</button>
            <button onClick={(e) => handelClickWithArgument('Moussa', e)}>Click With argument</button>
        </div>
    );
}
 
export default Home;