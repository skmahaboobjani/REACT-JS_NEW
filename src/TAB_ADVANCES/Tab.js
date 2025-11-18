// import React, { useState } from "react";

// function App() 
// {
//   const obj = [
//     {
//       title: "TAB1",
//       content: "frontend",
//     },
//     {
//       title: "TAB2",
//       content: "backend",
//     },
//     {
//       title: "TAB3",
//       content: "full stack",
//     },
//   ];

//   const [selectedTab, setSelectedTab] = useState([]);

//   const handleSelect = (title) =>
//    {
  
//     if (selectedTab.includes(title))
//      {
        
//       setSelectedTab(selectedTab.filter((t) => t !== title));
//     } else {
        
//     //   setSelectedTab([...selectedTab, title]);
//     setSelectedTab([title])
     
//     }
//     console.log(title) 
   
//   };



//   return (
//     <div>
//       {obj.map((x) => (
//         <div
//           key={x.title}
//           style={{ backgroundColor: selectedTab.includes(x.title) ? "red" : "yellow" }}
//           onClick={() => handleSelect(x.title)}
//         >
//           {x.title}
//         </div>
//       ))}

//       <div>
//      {selectedTab.map((x)=>
//      {
//         let contents=obj.find((m,n)=>m.title===x)

//         return(
//              <div>
//                 {contents.content}
//                 </div>
//         )
//      })}

//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const obj = [
    {
      title: "TAB1",
      content: "frontend",
    },
    {
      title: "TAB2",
      content: "backend",
    },
    {
      title: "TAB3",
      content: "full stack",
    },
  ];

  const [select, setselect] = useState([]);

  let handle = (title) => {
    if (select.includes(title)) {
      setselect(select.filter((x) => x != title));
    } else {
      setselect([title]);
    }
  };

  let filters = select.map((x) => obj.find((m) => m.title === x));
  return (
    <div>
      {obj.map((x) => (
        <li
          style={{
            backgroundColor: select.includes(x.title) ? "red" : "green",
          }}
          onClick={() => handle(x.title)}
        >
          {x.title}
        </li>
      ))}
      <div>{filters[0].content}</div>
    </div>
  );
}
export default App;



























