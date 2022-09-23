import "./UserDp.scss";


const UserDp = ({ name }) => {
  const firstLetter = name && name.charAt(0);

  return (
    <div className="parent">
      <p className="name">{firstLetter}</p>
    </div>

  )
}

export default UserDp;
