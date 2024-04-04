import { useUserStore } from "./userStore"
import { useCounterStore } from "../Counter/counterStore"

const User = () => {
  const { firstname, setFirstname, lastname, age } = useUserStore()
  const { count } = useCounterStore()

  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '1rem' }}>
      <h3>First name: {firstname}</h3>
      <h3>Last name: {lastname}</h3>
      <h3>Age: {age}</h3>
      <h3>Count: {count}</h3>

      <h4>Type new first name:</h4>
      <input type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
    </div>
  )
}

export default User