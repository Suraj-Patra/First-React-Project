export default function Main(props){
    return(
        <div>
            <main 
                className={props.darkMode?"main--section dark--mode":"main--section"}
            >
                <h1 className="main--heading">Fun facts about React</h1>
                <ul className="fun--list">
                    <li className="list--item">Was first released in 2013</li>
                    <li className="list--item">Was originally created by Jordan Walke</li>
                    <li className="list--item">Has well over 100K stars on GitHub</li>
                    <li className="list--item">Is maintained by Facebook</li>
                    <li className="list--item">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
        </div>
    )
}