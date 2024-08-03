import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from "../../assets/back-icon.png";
import user_1 from '../../assets/user-1.png';
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    if (tx > -75) {
      // Adjusted for 4 slides on smaller screens
      tx -= 25;
    }
  } else {
    if (tx > -50) {
      // Adjusted for 2 slides on larger screens
      tx -= 25;
    }
  }
  slider.current.style.transform = `translateX(${tx}%)`;
};

const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
};

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next arrow"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="back arrow"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user 1" />
                <div>
                  <h3>Emily Clark</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity has provided me with a remarkable learning experience.
                The courses are well-structured, and the faculty is highly
                supportive, making my journey truly rewarding.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user 2" />
                <div>
                  <h3>James Wilson</h3>
                  <span>Edusity, Canada</span>
                </div>
              </div>
              <p>
                Attending Edusity has been a transformative experience. The
                community is welcoming, and the resources available have greatly
                enhanced my academic performance.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user 3" />
                <div>
                  <h3>Sophia Lee</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>
                Edusity offers a top-notch education with access to incredible
                facilities. The dedication to student success is evident in
                every aspect of the institution.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user 4" />
                <div>
                  <h3>Michael Brown</h3>
                  <span>Edusity, Australia</span>
                </div>
              </div>
              <p>
                My experience at Edusity has been outstanding. The faculty's
                expertise and the state-of-the-art resources have significantly
                contributed to my academic growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;


// import React, { useRef } from 'react';
// import './Testimonials.css';
// import next_icon from '../../assets/next-icon.png';
// import back_icon from "../../assets/back-icon.png";
// import user_1 from '../../assets/user-1.png';
// import user_2 from "../../assets/user-2.png";
// import user_3 from "../../assets/user-3.png";
// import user_4 from "../../assets/user-4.png";

// const Testimonials = () => {
//     const slider = useRef();
//     let tx = 0;

//     const slideForward = () => {
//         if (tx > -75) { // Adjusted for 4 slides on smaller screens
//             tx -= 25;
//         }
//         slider.current.style.transform = `translateX(${tx}%)`;
//     }

//     const slideBackward = () => {
//         if (tx < 0) {
//             tx += 25;
//         }
//         slider.current.style.transform = `translateX(${tx}%)`;
//     };

//     return (
//         <div className="testimonials">
//             <img
//                 src={next_icon}
//                 alt="next arrow"
//                 className="next-btn"
//                 onClick={slideForward}
//             />
//             <img
//                 src={back_icon}
//                 alt="back arrow"
//                 className="back-btn"
//                 onClick={slideBackward}
//             />
//             <div className="slider">
//                 <ul ref={slider}>
//                     <li>
//                         <div className="slide">
//                             <div className="user-info">
//                                 <img src={user_1} alt="user 1" />
//                                 <div>
//                                     <h3>Emily Clark</h3>
//                                     <span>Edusity, USA</span>
//                                 </div>
//                             </div>
//                             <p>
//                                 Edusity has provided me with a remarkable learning experience.
//                                 The courses are well-structured, and the faculty is highly
//                                 supportive, making my journey truly rewarding.
//                             </p>
//                         </div>
//                     </li>
//                     <li>
//                         <div className="slide">
//                             <div className="user-info">
//                                 <img src={user_2} alt="user 2" />
//                                 <div>
//                                     <h3>James Wilson</h3>
//                                     <span>Edusity, Canada</span>
//                                 </div>
//                             </div>
//                             <p>
//                                 Attending Edusity has been a transformative experience. The
//                                 community is welcoming, and the resources available have greatly
//                                 enhanced my academic performance.
//                             </p>
//                         </div>
//                     </li>
//                     <li>
//                         <div className="slide">
//                             <div className="user-info">
//                                 <img src={user_3} alt="user 3" />
//                                 <div>
//                                     <h3>Sophia Lee</h3>
//                                     <span>Edusity, UK</span>
//                                 </div>
//                             </div>
//                             <p>
//                                 Edusity offers a top-notch education with access to incredible
//                                 facilities. The dedication to student success is evident in
//                                 every aspect of the institution.
//                             </p>
//                         </div>
//                     </li>
//                     <li>
//                         <div className="slide">
//                             <div className="user-info">
//                                 <img src={user_4} alt="user 4" />
//                                 <div>
//                                     <h3>Michael Brown</h3>
//                                     <span>Edusity, Australia</span>
//                                 </div>
//                             </div>
//                             <p>
//                                 My experience at Edusity has been outstanding. The faculty's
//                                 expertise and the state-of-the-art resources have significantly
//                                 contributed to my academic growth.
//                             </p>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Testimonials;

