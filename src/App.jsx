import React, { useEffect, useState } from "react";
import Index from "./Index";
import Topic from "./Topic";

function App() {
    const [courses, setCourses] = useState([]); 
    const [selectedCourse, setSelectedCourse] = useState({name: null, credit: null, price: null});

    useEffect(() => {
        fetch('./Course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleClick = (courseName, courseCredit, coursePrice) => {
        console.log(courseName)
        setSelectedCourse({ name: courseName, credit: courseCredit, price: coursePrice });
    }

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-4">Course Registration</h1>
            <div className="flex gap-12 ml-20">
                <div className="grid grid-cols-3 gap-8">
                    {
                        courses.map(course => <Index key={course.id}
                             handleClick={handleClick}
                              course={course}/>)
                    }
                </div>
                <Topic selectedCourse={selectedCourse.name} courseCredit={selectedCourse.credit} coursePrice={selectedCourse.price} ></Topic>
            </div>
        </div>
    );
}

export default App;
