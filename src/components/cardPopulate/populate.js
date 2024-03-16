import React from 'react';
import Card from '../cards/cards';
import './populate.css';
import img1 from '../../assets/Fitnessprofessionals/a.jpg';
import img2 from '../../assets/Fitnessprofessionals/b.jpg';
import img3 from '../../assets/Fitnessprofessionals/c.jpg';
import img4 from '../../assets/Fitnessprofessionals/d.jpg';
import img5 from '../../assets/Fitnessprofessionals/e.jpg';
import img6 from '../../assets/Fitnessprofessionals/f.jpg';
import img7 from '../../assets/Fitnessprofessionals/g.jpg';
import img8 from '../../assets/Fitnessprofessionals/h.jpg';
import img9 from '../../assets/Fitnessprofessionals/i.jpg';
import img10 from '../../assets/Fitnessprofessionals/j.jpg';
import img11 from '../../assets/Fitnessprofessionals/k.jpg';
import img12 from '../../assets/Fitnessprofessionals/l.jpg';
import img13 from '../../assets/Fitnessprofessionals/m.jpg';
import img14 from '../../assets/Fitnessprofessionals/n.jpg';
import img15 from '../../assets/Fitnessprofessionals/o.jpg';
import img16 from '../../assets/Fitnessprofessionals/p.jpg';
import img17 from '../../assets/Fitnessprofessionals/q.jpg';
import img18 from '../../assets/Fitnessprofessionals/r.jpg';
import img19 from '../../assets/Fitnessprofessionals/s.jpg';
import img20 from '../../assets/Fitnessprofessionals/t.jpg';
import img21 from '../../assets/Fitnessprofessionals/u.jpg';
import img22 from '../../assets/Fitnessprofessionals/v.jpg';
import img23 from '../../assets/Fitnessprofessionals/w.jpg';
import img24 from '../../assets/Fitnessprofessionals/x.jpg';
import img25 from '../../assets/Fitnessprofessionals/y.jpg';
import img26 from '../../assets/Fitnessprofessionals/z.jpg';
import img27 from '../../assets/Fitnessprofessionals/q.jpg';

// const importImages = () => {
//   const images = [];
//   for (let i = 1; i <= 27; i++) {
//     images.push(require(`../../assets/Fitnessprofessionals/${String.fromCharCode(97 + i)}.jpg`));
//   }
//   return images;
// };

// const [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27] = importImages();


const UserContainer = () => {

  const people = [
    { firstName: 'John', lastName: 'Doe', gender: 'Male', image:img1 },
    { firstName: 'Jane', lastName: 'Smith', gender: 'Female' , image:img2 },
    { firstName: 'Michael', lastName: 'Brown', gender: 'Male', image:img3 },
    { firstName: 'Emily', lastName: 'White', gender: 'Female' , image:img4},
    { firstName: 'David', lastName: 'Wilson', gender: 'Male' ,image:img5},
    { firstName: 'Sarah', lastName: 'Johnson', gender: 'Female' , image:img6},
    { firstName: 'Chris', lastName: 'Martinez', gender: 'Male' , image:img7 },
    { firstName: 'Lisa', lastName: 'Garcia', gender: 'Female', image:img8 },
    { firstName: 'James', lastName: 'Rodriguez', gender: 'Male', image: img9},
    { firstName: 'Angela', lastName: 'Lee', gender: 'Female', image:img10 },
    { firstName: 'Robert', lastName: 'Harris', gender: 'Male', image:img11},
    { firstName: 'Patricia', lastName: 'Clark', gender: 'Female' , image:img12},
    { firstName: 'Daniel', lastName: 'Lewis', gender: 'Male' , image:img13 },
    { firstName: 'Jennifer', lastName: 'Walker', gender: 'Female' , image:img14},
    { firstName: 'William', lastName: 'Hall', gender: 'Male' , image:img15},
    { firstName: 'Linda', lastName: 'Young', gender: 'Female' , image: img16 },
    { firstName: 'Joseph', lastName: 'Allen', gender: 'Male' , image:img17},
    { firstName: 'Barbara', lastName: 'Scott', gender: 'Female', image:  img19},
    { firstName: 'Thomas', lastName: 'King', gender: 'Male', image: img20},
    { firstName: 'Susan', lastName: 'Wright', gender: 'Female', image: img21 },
    { firstName: 'Kevin', lastName: 'Lopez', gender: 'Male', image: img22},
    { firstName: 'Karen', lastName: 'Hill', gender: 'Female' , image: img23},
    { firstName: 'Richard', lastName: 'Green', gender: 'Male', image:img24 },
    { firstName: 'Jessica', lastName: 'Adams', gender: 'Female' ,image: img25},
    { firstName: 'Brian', lastName: 'Nelson', gender: 'Male' ,image:img26},
    { firstName: 'Nancy', lastName: 'Baker', gender: 'Female' ,image:img27},
    { firstName: 'Gary', lastName: 'Gonzalez', gender: 'Male' ,image:img2},
    { firstName: 'Elizabeth', lastName: 'Carter', gender: 'Female',image: img8 },
    { firstName: 'Matthew', lastName: 'Mitchell', gender: 'Male',image:img18 },
    { firstName: 'Amanda', lastName: 'Turner', gender: 'Female',image: img15 }
];

const specialties = ["Yoga", "Weight Training", "Cardio", "Pilates", "Crossfit", "Dance", "Martial Arts"];
const locations = ["New York", "California", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio"];
const experiences = ["1 year", "2 years", "5 years", "10 years", "3 years", "4 years", "6 years", "7 years", "8 years", "9 years"];




return (
    < div className='container'>
        {people.map((user, index) => (
            <Card 
            key={index}
            name={`${user.firstName} ${user.lastName}`}
            gender={user.gender}
            image={user.image}
            speciality={specialties[index % specialties.length]}
            location={locations[index % locations.length]}
            experience={experiences[index % experiences.length]}
            />
        ))}
    </div>
);
};

export default UserContainer;
