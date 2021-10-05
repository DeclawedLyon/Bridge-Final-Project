// import React from 'react'
// import { Button, Popup } from 'semantic-ui-react'

// const PopupExample = () => (
//   <Popup content='Add users to your feed' trigger={<Button icon='add' />} />
// )

// export default PopupExample

// import React from 'react'
// import { Popup, Card, Image, Rating } from 'semantic-ui-react'

// const PopupExample = () => (
//   <Popup
//     trigger={
//       <Card>
//         <Image src='https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg' />
//         <Card.Content>
//           <Card.Header>My Neighbor Totoro</Card.Header>
//           <Card.Description>
//             Two sisters move to the country with their father in order to be
//             closer to their hospitalized mother, and discover the surrounding
//             trees are inhabited by magical spirits.
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     }
//   >
//     <Popup.Header>User Rating</Popup.Header>
//     <Popup.Content>
//       <Rating icon='star' defaultRating={3} maxRating={4} />
//     </Popup.Content>
//   </Popup>
// )

// export default PopupExample

// import React from 'react'
// import { Icon, Popup, Grid } from 'semantic-ui-react'

// const PopupExample = () => (
//   <Grid columns={3} style={{ width: '600px' }}>
//     <Grid.Row>
//       <Grid.Column>
//         <Popup
//           trigger={<Icon name='heart' color='red' size='large' circular />}
//           content='I am positioned to the top left'
//           position='top left'
//         />
//       </Grid.Column>
//       <Grid.Column textAlign='center'>
//         <Popup
//           trigger={<Icon name='heart' color='red' size='large' circular />}
//           content='I am positioned to the top center'
//           position='top center'
//         />
//       </Grid.Column>
//       <Grid.Column textAlign='right'>
//         <Popup
//           trigger={<Icon name='heart' color='red' size='large' circular />}
//           content='I am positioned to the top right'
//           position='top right'
//         />
//       </Grid.Column>
//     </Grid.Row>
//     <Grid.Row>
//       <Grid.Column floated='left'>
//         <Popup
//           trigger={<Icon name='heart' color='red' size='large' circular />}
//           content='I am positioned to the left center'
//           position='left center'
//         />
//       </Grid.Column>
//       <Grid.Column floated='right' textAlign='right'>
//         <Popup
//           trigger={<Icon name='heart' color='red' size='large' circular />}
//           content='I am positioned to the right center'
//           position='right center'
//         />
//       </Grid.Column>
//     </Grid.Row>
//     <Grid.Row>
//       <Grid.Column>
//         <Popup
//           trigger={<Icon name='heart' color='red' size='large' circular />}
//           content='I am positioned to the bottom left'
//           position='bottom left'
//         />
//       </Grid.Column>
//       <Grid.Column textAlign='center'>
//         <Popup
//           trigger={<Icon name='heart' color='red' size='large' circular />}
//           content='I am positioned to the bottom center'
//           position='bottom center'
//         />
//       </Grid.Column>
//       <Grid.Column textAlign='right'>
//         <Popup
//           trigger={<Icon name='heart' color='red' size='large' circular />}
//           content='I am positioned to the bottom right'
//           position='bottom right'
//         />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// )

// export default PopupExample'



import React from "react";
import SmsForm from "./textInput";
import "./popup.scss";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <SmsForm 
        addAlert={props.addAlert}
        />
      </div>
    </div>
  );
};
 
export default Popup;