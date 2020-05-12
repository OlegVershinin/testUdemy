import React from 'react';
import s from './Header.module.css';
import Logo from './Logo';
import { Grid } from 'semantic-ui-react';

const Header = () => {
  return (
    <Grid>
      <Grid.Row className={s.my_header}>
        <Grid.Column width={5}>
          <Logo />
        </Grid.Column>
        <Grid.Column width={11}>
          <p>&#174; by Oleg Vershinin</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

// const Header = () => {
//   return (
//     <div className={`ui grid ${s.my_header}`}>
//       <div className={`center aligned row ${s.my_header1}`}>
//         <div className="three wide column">
//           <Logo />
//         </div>
//         <div className="thirteen wide column">
//           <p>&#174; by Oleg Vershinin</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Header;
