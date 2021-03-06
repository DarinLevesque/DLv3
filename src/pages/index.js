import React from 'react';
import {
  Header,
  Summary,
  Experience,
  Projects,
  Skills,
  List,
  Education,
  Footer,
  SEO
} from '../components';
import resume from '../../data/profile';
import '../main.css';
import tawkTo from "tawkto-react";

const tawkToPropertyId = '59a630da7ab2de3aea9d73d6'
const tawkToKey = 'default'

class Home extends React.Component {
    componentDidMount(){
      tawkTo(tawkToPropertyId, tawkToKey)
  }
  render() {
    return(
      <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
        <SEO title="Resume" />
        <div className="container mx-auto shadow bg-white py-5 px-10 dark:bg-gray-800">
          <Header
            contacts={resume.contact}
            name={resume.fullname}
            role={resume.role}
          />
          <Summary data={resume.summary} />
          <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
            <div className="lg:w-2/3 lg:pr-8">
              {resume.experience && <Experience data={resume.experience} />}
              {resume.projects && <Projects data={resume.projects} />}
            </div>
            <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
              {resume.skills && <Skills data={resume.skills} />}
              {resume.education && <Education data={resume.education} />}
              {resume.sidebar &&
                resume.sidebar.map(item => (
                  <List key={`${item.title}-side`} data={item} />
                ))}
            </div>
          </div>
          <Footer social={resume.social} />
        </div>
      </main>
    )
  }

}
// const Home = () => (
  

//   <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
//     <SEO title="Resume" />
//     <div className="container mx-auto shadow bg-white py-5 px-10">
//       <Header
//         contacts={resume.contact}
//         name={resume.fullname}
//         role={resume.role}
//       />
//       <Summary data={resume.summary} />
//       <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
//         <div className="lg:w-2/3 lg:pr-8">
//           {resume.experience && <Experience data={resume.experience} />}
//           {resume.projects && <Projects data={resume.projects} />}
//         </div>
//         <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
//           {resume.skills && <Skills data={resume.skills} />}
//           {resume.education && <Education data={resume.education} />}
//           {resume.sidebar &&
//             resume.sidebar.map(item => (
//               <List key={`${item.title}-side`} data={item} />
//             ))}
//         </div>
//       </div>
//       <Footer social={resume.social} />
//     </div>
//   </main>
// );

export default Home;
