import { useState } from "react";

const Key = () => {
    const [users, setusers] = useState([
        {
            id: 1,
            name: "john doe",
            age: 22,
            isdeveloper: false
        },
        {
            id: 2,
            name: "jessica ben",
            age: 25,
            isdeveloper: true
        },
    ]);

    return (
        <div className="container my-4">
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h1>Name : {user.name}</h1>
                            <h5>Age : {user.age}</h5>
                            <p>
                                {user.isdeveloper ? "This user is a developer." : "This user is not a developer."}
                            </p>
                            <br />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Key;
