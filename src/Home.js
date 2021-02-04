import { useState } from 'react';

const Home = () => {
    //let name = 'mario';
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);

    
    const handelClick = () => {
        setName('luigi');
        setAge(55);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handelClick}>Click here</button>
        </div>
    );
}
 
export default Home;