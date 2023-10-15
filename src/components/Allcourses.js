import { useState, useEffect } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourse=() =>{
    useEffect(() => {
        document.title = "All Courses"
    }, []);

    //function to load server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("courses has been loaded");
                setCourses(response.data)
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");

            }
        )
    };

    useEffect(()=> {
        getAllCoursesFromServer();
    },[])



    const [courses,setCourses] = useState([])

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id))
    }

    return (
        <div>
            <h1> All courses</h1>
            <p>List of courses</p>
            {
                courses.length>0 ? courses.map((item)=>
                    <Course key={item.id} course={item} update={updateCourses}/>
                )
                : "No courses"
            }
        </div>

    );
};

export default Allcourse;