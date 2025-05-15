import Welcome from './welcome';
import './App.css';
import UserCard  from './UserCard';


function App() {
   const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 }
  ];
  return (
    <div>
      <Welcome />
      <UserCard name='Raja' age={21} />
      {users.map(user => (
        <UserCard idname='ID : ' id={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default App;
