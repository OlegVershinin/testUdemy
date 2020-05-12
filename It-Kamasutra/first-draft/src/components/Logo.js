import React from 'react';
import { Image } from 'semantic-ui-react';

const Logo = () => {
  return (
    <Image
      src="https://freesvg.org/img/hyper-cube-red.png?w=150&h=150&fit=fill"
      size="mini"
      centered
      verticalAlign="top"
    />
  );
};

// const Logo = () => {
//   return (
//     <div>
//       <img
//         className="ui mini centered image"
//         alt=""
//         src="https://freesvg.org/img/hyper-cube-red.png?w=150&h=150&fit=fill"
//       ></img>
//     </div>
//   );
// };

export default Logo;
