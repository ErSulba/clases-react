import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function Greeting(props) {
  const isLoggedin = props.isloggedin; //Boolean
  if (isLoggedin) {
    return <UserGreeting />
  }
  return <GuestGreeting />;
}

export default Greeting;