import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider, ColorModeScript, Heading } from "@chakra-ui/react"
import "@fontsource/open-sans/700.css";
import "@fontsource/aguafina-script/400.css";

import ReactFullpage from '@fullpage/react-fullpage';

import theme from './theme/index.js'

const FullPage = () => (

  <ReactFullpage

    scrollingSpeed={1000}
    navigation={true}
    navigationPosition={"right"}
    navigationTooltips={["Home", "About Me", "Projects", "Education", "Footer"]}

    render= {({state, fullpageApi}) => {

      return (
        <ReactFullpage.Wrapper>
          <React.StrictMode>
            <ChakraProvider theme={theme}>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <App fullpageApi={fullpageApi} />
            </ChakraProvider>
          </React.StrictMode>
        </ReactFullpage.Wrapper>
      );
    }}
  />
)

// const Fullpage = () => (
//   <ReactFullpage
//     //fullpage options
//     licenseKey = {'YOUR_KEY_HERE'}
//     scrollingSpeed = {1000} /* Options here */

//     render={({ state, fullpageApi }) => {
//       return (
//         <ReactFullpage.Wrapper>
//           <div className="section">
//             <p>Section 1 (welcome to fullpage.js)</p>
//             <button onClick={() => fullpageApi.moveSectionDown()}>
//               Click me to move down
//             </button>
//           </div>
//           <div className="section">
//             <p>Section 2</p>
//           </div>
//         </ReactFullpage.Wrapper>
//       );
//     }}
//   />
// );

ReactDOM.render(<FullPage />, document.getElementById('root'));

// ReactDOM.render(
//   <ReactFullpage.Wrapper>
//     <React.StrictMode>
//       <ChakraProvider theme={theme}>
//         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//         <App />
//       </ChakraProvider>
//     </React.StrictMode>
//   </ReactFullpage.Wrapper>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
